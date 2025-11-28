import { useQuery } from "@tanstack/react-query";
import React from "react";
import useUserAuth from "../../../Hooks/useUserAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AssignedDeliveries = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useUserAuth();
  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels", user.email, "driver_assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/riders?riderEmail=${user.email}&deliveryStatus=driver_assigned`
      );
      return res.data;
    },
  });
  return (
    <div>
      <h2>Parcel pending: {parcels.length}</h2>
      <h2>Parcel pending: {console.log(parcels)}</h2>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, i) => (
              <tr key={parcel._id}>
                <th>{i + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>Quality Control Specialist</td>
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
