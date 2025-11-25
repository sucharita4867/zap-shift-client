import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useUserAuth from "../../Hooks/useUserAuth";
import { useLoaderData } from "react-router";
import agentImg from "../../assets/agent-pending.png";

const Rider = () => {
  const { register, handleSubmit, control } = useForm();
  const axiosSecure = useAxiosSecure();
  const { user } = useUserAuth();

  const serviceCenter = useLoaderData();

  // Unique Regions
  const regions = [...new Set(serviceCenter.map((c) => c.region))];

  // Watch region selection
  const selectedRegion = useWatch({ control, name: "region" });

  // Get districts by region
  const districtsByRegion = (region) => {
    return serviceCenter
      .filter((c) => c.region === region)
      .map((d) => d.district);
  };

  const handleRiderApplication = (data) => {
    console.log("Rider form data:", data);
  };

  return (
    <div className="bg-white p-10 rounded-xl my-10">
      {/* HEADER */}
      <h1 className="text-3xl font-bold text-[#03373d] mb-4">Be a Rider</h1>
      <p className="max-w-xl text-gray-600">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>

      {/* FORM */}
      <form onSubmit={handleSubmit(handleRiderApplication)} className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* ==== LEFT SECTION ==== */}
          <div className="md:col-span-7 space-y-10">
            {/* Personal Information */}
            <fieldset className="space-y-3">
              <h2 className="text-xl font-semibold text-secondary">
                Tell us about yourself
              </h2>

              {/* Name + Age */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="label text-lg">Your Name</label>
                  <input
                    type="text"
                    {...register("name")}
                    defaultValue={user?.displayName}
                    className="input w-full"
                    placeholder="Enter Your Name"
                  />
                </div>

                <div>
                  <label className="label text-lg">Your Age</label>
                  <input
                    type="number"
                    {...register("age")}
                    className="input w-full"
                    placeholder="Age"
                  />
                </div>
              </div>

              {/* Email + District */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="label text-lg">Your Email</label>
                  <input
                    type="email"
                    {...register("email")}
                    defaultValue={user?.email}
                    className="input w-full"
                    placeholder="Your Email"
                  />
                </div>

                <div>
                  <label className="label text-lg">Select District</label>
                  <select {...register("district")} className="select w-full">
                    <option disabled>Select district</option>
                    {districtsByRegion(selectedRegion)?.map((d, i) => (
                      <option key={i} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Region */}
              <div>
                <label className="label text-lg">Which Region?</label>
                <select {...register("region")} className="select w-full">
                  <option disabled>Select a region</option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              {/* Address */}
              <div>
                <label className="label text-lg">Your Address</label>
                <input
                  type="text"
                  {...register("address")}
                  className="input w-full"
                  placeholder="Full Address"
                />
              </div>

              {/* NID + Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="label text-lg">NID Number</label>
                  <input
                    type="number"
                    {...register("nid")}
                    className="input w-full"
                    placeholder="Enter NID No"
                  />
                </div>

                <div>
                  <label className="label text-lg">Contact Number</label>
                  <input
                    type="number"
                    {...register("contact")}
                    className="input w-full"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              {/* Driving License */}
              <div>
                <label className="label text-lg">Driving License No</label>
                <input
                  type="text"
                  {...register("license")}
                  className="input w-full"
                  placeholder="License Number"
                />
              </div>

              {/* Working Zone */}
              <div>
                <label className="label text-lg">
                  Which Zone you want to work?
                </label>
                <select {...register("workZone")} className="select w-full">
                  <option disabled>Select zone</option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
            </fieldset>

            {/* SUBMIT BUTTON */}
            <button className="btn btn-primary text-black w-full">
              Submit Application
            </button>
          </div>

          {/* ==== RIGHT SIDE IMAGE ==== */}
          <div className="md:col-span-5 flex justify-center">
            <img src={agentImg} className="w-full max-w-md" alt="Rider" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Rider;
