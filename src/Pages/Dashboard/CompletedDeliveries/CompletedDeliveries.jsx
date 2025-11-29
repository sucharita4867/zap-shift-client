import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useUserAuth from "../../../Hooks/useUserAuth";
import { useQuery } from "@tanstack/react-query";

const CompletedDeliveries = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useUserAuth();
  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels", user.email, "driver_assigned"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/riders?riderEmail=${user.email}&deliveryStatus=parcel_delivered`
      );
      return res.data;
    },
  });

  const calculatePayout = (parcel) => {
    if (parcel.senderDistricts === parcel.receiverDistrict) {
      return parcel.cost * 0.8;
    } else {
      return parcel.cost * 0.6;
    }
  };
  return (
    <div>
      <h2 className="text-4xl text-secondary">
        Completed Deliveries: {parcels.length}
      </h2>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Created At</th>
              <th>Cost</th>
              <th>Payout</th>
              <th>Pickup District</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.createdAt}</td>
                <td>{parcel.cost}</td>
                <td>{calculatePayout(parcel)}</td>
                <td>{parcel.senderDistricts}</td>
                <td>
                  <button
                    // onClick={() => openAssignRiderModal(parcel)}
                    className="btn btn-primary text-black"
                  >
                    CashOut
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompletedDeliveries;
