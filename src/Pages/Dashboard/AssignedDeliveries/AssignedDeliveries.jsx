import { useQuery } from "@tanstack/react-query";
import React from "react";
import useUserAuth from "../../../Hooks/useUserAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AssignedDeliveries = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useUserAuth();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels", user.email, "driver_assigned"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/riders?riderEmail=${user.email}&deliveryStatus=driver_assigned`
      );
      return res.data;
    },
  });
  const handleAcceptDelivery = (parcel) => {
    // console.log(parcel);
    const statusInfo = { deliveryStatus: "rider_arriving" };
    axiosSecure
      .patch(`/parcels/${parcel._id}/status`, statusInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Thank you for accepting`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };
  return (
    <div>
      <h2>Parcel pending: {parcels.length}</h2>
      {/* <h2>Parcel pending: {console.log(parcels)}</h2> */}
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Confirm</th>
              <th>Other</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, i) => (
              <tr key={parcel._id}>
                <th>{i + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>
                  {parcel.deliveryStatus === "driver_assigned" ? (
                    <>
                      <button
                        onClick={() => handleAcceptDelivery(parcel)}
                        className="text-back btn bg-primary"
                      >
                        Accept
                      </button>
                      <button className="ms-4 text-back btn bg-warning">
                        Reject
                      </button>
                    </>
                  ) : (
                    <span>Accepted</span>
                  )}
                </td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignedDeliveries;
