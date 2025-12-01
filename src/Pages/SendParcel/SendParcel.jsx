import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useUserAuth from "../../Hooks/useUserAuth";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();
  const { user } = useUserAuth();

  const serviceCenter = useLoaderData();
  const regionsDuplicate = serviceCenter.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  // console.log(regions);
  // explore useMemo useCallback
  const senderRegion = useWatch({ control, name: "senderRegions" });

  const receiverRegion = useWatch({ control, name: "receiverRegions" });

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenter.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    // console.log(data);
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    console.log("cost", cost);
    data.cost = cost;
    Swal.fire({
      title: "Agree with the Cost",
      text: `You will be charged ${cost} taka`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "confirm and continue payment!",
    }).then((result) => {
      if (result.isConfirmed) {
        // save the parcel in database
        axiosSecure.post("/parcels", data).then((res) => {
          console.log("after saving parcel", res.data);
        });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "parcel has created . please pay",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };
  return (
    <div className="bg-white p-10 rounded-xl my-10">
      <h1 className="text-4xl font-bold text-[#03373d]">Send A Parcel</h1>
      <form onSubmit={handleSubmit(handleSendParcel)} className="mt-4 p-6">
        {/* parcel type */}
        <h1 className="text-secondary text-xl font-semibold mb-2">
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
        <div className="grid gird-cols-1 md:grid-cols-2 items-center gap-12 my-6 text-black">
          <fieldset className="fieldset">
            <label className="label text-lg">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full"
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label text-lg">Parcel Weight (kg)</label>
            <input
              type="number"
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>
        {/* two column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* sender Details */}
          <fieldset className="fieldset">
            <h1 className="text-xl font-semibold text-secondary">
              Sender Details
            </h1>
            {/* sender name */}
            <label className="label text-lg">Sender Name</label>
            <input
              type="text "
              {...register("senderName")}
              defaultValue={user?.displayName}
              className="input w-full"
              placeholder="Sender Name"
            />
            {/* sender email */}
            <label className="label text-lg">Sender Email</label>
            <input
              type="email "
              {...register("senderEmail")}
              className="input w-full"
              defaultValue={user?.email}
              placeholder="Sender Email"
            />

            {/* sender region */}
            <fieldset className="fieldset ">
              <label className="label text-lg">Sender Regions</label>
              <select
                {...register("senderRegions")}
                defaultValue="Pick a region"
                className="select w-full"
              >
                <option disabled={true}>Pick a regions</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* sender districts */}
            <fieldset className="fieldset ">
              <label className="label text-lg">Sender districts</label>
              <select
                {...register("senderDistricts")}
                defaultValue="Pick a districts"
                className="select w-full"
              >
                <option disabled={true}>Pick a districts</option>
                {districtsByRegion(senderRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* sender address */}
            <label className="label text-lg">Sender Address</label>
            <input
              type="text "
              {...register("senderAddress")}
              className="input w-full"
              placeholder="Sender Address"
            />
            {/* sender phone no */}
            <label className="label text-lg">Sender Phone No</label>
            <input
              type="number "
              {...register("senderPhoneNo")}
              className="input w-full"
              placeholder="Sender Phone No"
            />

            {/* sender description */}
            <label className="label text-lg">Pickup Instruction</label>
            <textarea
              className="textarea h-24 w-full"
              placeholder="Pickup Instruction"
            ></textarea>
          </fieldset>
          {/* receiver Details */}
          <fieldset className="fieldset">
            <h1 className="text-xl font-semibold text-secondary">
              Receiver Details
            </h1>
            {/* Receiver name */}
            <label className="label text-lg">Receiver Name</label>
            <input
              type="text "
              {...register("receiverName")}
              className="input w-full"
              placeholder="Receiver Name"
            />

            {/* Receiver email */}
            <label className="label text-lg">Receiver Email</label>
            <input
              type="email "
              {...register("receiverEmail")}
              className="input w-full"
              placeholder="Receiver Email"
            />

            {/* Receiver regions */}
            <fieldset className="fieldset ">
              <label className="label text-lg">Receiver Regions</label>
              <select
                {...register("receiverRegions")}
                defaultValue="Pick a region"
                className="select w-full"
              >
                <option disabled={true}>Pick a regions</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* Receiver district */}
            <fieldset className="fieldset ">
              <label className="label text-lg">Receiver District</label>
              <select
                {...register("receiverDistrict")}
                defaultValue="Pick a district"
                className="select w-full"
              >
                {/*  */}
                {/* <option disabled={true}>Pick a districts</option>
                {districtsByRegion(senderRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))} */}
                {/*  */}
                <option disabled={true}>Pick a district</option>
                {districtsByRegion(receiverRegion).map((d, i) => (
                  <option key={i} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* Receiver address */}
            <label className="label text-lg">Receiver Address</label>
            <input
              type="text "
              {...register("receiverAddress")}
              className="input w-full"
              placeholder="Receiver Address"
            />
            {/* Receiver phone no */}
            <label className="label text-lg">Receiver Phone No</label>
            <input
              type="number "
              {...register("receiverPhoneNo")}
              className="input w-full"
              placeholder="Receiver Phone No"
            />

            {/* Receiver district
            <label className="label text-lg">Receiver District</label>
            <input
              type="text "
              {...register("receiverDistrict")}
              className="input w-full"
              placeholder="Receiver District"
            /> */}

            {/* Receiver description */}
            <label className="label text-lg">Delivery Instruction</label>
            <textarea
              className="textarea h-24 w-full"
              placeholder="Delivery Instruction"
            ></textarea>
          </fieldset>
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
