import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaEye, FaUserCheck } from "react-icons/fa";
import { IoPersonRemoveSharp } from "react-icons/io5";
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: riders = [] } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  const updateRidersStatus = (rider, status) => {
    const updateInfo = { status: status, email: rider.email };
    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Rider status is set to ${status}`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  const handleApproval = (rider) => {
    updateRidersStatus(rider, "approved");
  };
  const handleRejection = (rider) => {
    updateRidersStatus(rider, "rejected");
  };
  return (
    <div>
      <h2 className="text-4xl ">Riders pending Approval :{riders.length}</h2>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>District</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((rider, index) => (
              <tr key={rider._id}>
                <th>{index + 1}</th>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>
                  <p
                    className={`${
                      rider.status === "approved"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {rider.status}
                  </p>
                </td>
                <td>{rider.district}</td>
                <td>
                  <button className="btn mr-2">
                    <FaEye />
                  </button>
                  <button onClick={() => handleApproval(rider)} className="btn">
                    <FaUserCheck />
                  </button>
                  <button className="btn mx-2">
                    <FaTrashCan />
                  </button>
                  <button
                    onClick={() => handleRejection(rider)}
                    className="btn "
                  >
                    <IoPersonRemoveSharp />
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

export default ApproveRiders;
