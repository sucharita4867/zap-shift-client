import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useUserAuth from "../../../Hooks/useUserAuth";

const PaymentHistory = () => {
  const { user } = useUserAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      console.log(user);
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="text-4xl text-secondary">
        Payments History : {payments.length}{" "}
      </h2>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Amount</th>
              <th>Paid Time</th>
              <th>TransactionId Id</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>{payment.parcelName}</td>
                <td>${payment.amount}</td>
                <td>{payment.paidAt}</td>
                <td>{payment.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
