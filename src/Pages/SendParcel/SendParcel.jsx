import React from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSendParcel = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-white p-10 rounded-xl my-10">
      <h1 className="text-4xl font-bold text-[#03373d]">Send A Parcel</h1>
      <form onSubmit={handleSubmit(handleSendParcel)} className="mt-4 p-6">
        {/* parcel type */}
        <h1 className="text-secondary font-semibold mb-2">
          Enter your parcel details
        </h1>
        <div className="flex gap-4">
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio"
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio"
            />
            Non-Document
          </label>
        </div>
        {/* parcel info: name , weight */}
        <div>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
          </fieldset>
        </div>
        {/* two column */}
        <div>
          {/* sender info */}
          <div></div>
          {/* reciver info */}
          <div></div>
        </div>
        <input
          type="submit"
          className="btn btn-primary text-black"
          value="Send Parcel"
        />
      </form>
    </div>
  );
};

export default SendParcel;
