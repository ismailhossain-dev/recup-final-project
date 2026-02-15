import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //region data fetch
  const serviceCenters = useLoaderData();
  // console.log(serviceCenters);
  //=====just mapping region name=========

  const duplicateRegions = serviceCenters.map((regions) => regions.region);
  //   console.log(duplicateRegions);
  //  ========= Duplicate regions of the new set were used.===========
  //spreed operate use then convert array data
  const singleRegion = [...new Set(duplicateRegions)];
  // console.log(singleRegion);

  //watch or useWatch for auto set district
  const senderRegions = watch("senderRegion");

  //taking district from serviceCenters
  const districtsByRegion = (region) => {
    //filter mardome amra region gola nitechi
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  //
  const handleParcelFrom = (data) => {
    console.log(data);
  };

  return (
    <div className="my-15 w-full">
      <h2 className="text-4xl font-bold text-black">Send A Parcel</h2>
      <h3 className="text-2xl font-bold text-black mt-10">Enter your parcel details</h3>

      <form onSubmit={handleSubmit(handleParcelFrom)}>
        <div className="flex gap-6 mt-4">
          <label className="flex items-center gap-3">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio radio-success"
              defaultChecked
            />
            Document
          </label>

          <label className="flex items-center gap-3">
            <input
              type="radio"
              {...register("parcelType")}
              value="nonDocument"
              className="radio radio-success"
            />
            Non-Document
          </label>
        </div>
        {/* Parcel Info & parcel weight */}
        <div className="grid grid-cols-1 gap-12 my-6 items-center md:grid-cols-2 ">
          {/* Parcel Name */}
          <div className="w-full">
            <label className="label mb-2">
              <span className="label-text font-semibold">Parcel Name</span>
            </label>

            <input
              type="text"
              {...register("parcelName", { required: true })}
              placeholder="Enter your parcel name"
              className="input input-bordered focus:input-primary w-full"
            />
            {errors.parcelName && <p className="text-red-500 mt-1">Parcel name is required</p>}
          </div>

          {/* Parcel Weight */}
          <div className="w-full">
            <label className="label mb-2">
              <span className="label-text font-semibold">Parcel Weight</span>
            </label>

            <input
              type="number"
              {...register("parcelWeight", { required: true })}
              placeholder="Enter your parcel weight"
              className="input input-bordered focus:input-primary w-full"
            />
            {errors.parcelWeight && <p className="text-red-500 mt-1">Parcel weight is required</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 justify-center items-center gap-12 md:grid-cols-2  w-full">
          {/* Sender Details */}
          <div className=" w-full space-y-4">
            <h2 className="text-3xl font-semibold mb-3">Sender Details</h2>

            {/* Sender Name */}
            <div>
              <label className="label mb-2">
                <span className="label-text font-semibold">Sender Name</span>
              </label>

              <input
                type="text"
                {...register("senderName", { required: true })}
                placeholder="Enter sender name"
                className="input input-bordered focus:input-primary w-full"
              />
              {errors.senderName && <p className="text-red-500 mt-1">Sender name is required</p>}
            </div>

            {/* Sender Address */}
            <div>
              <label className="label mb-2">
                <span className="label-text font-semibold">Sender Address</span>
              </label>

              <input
                type="text"
                {...register("senderAddress", { required: true })}
                placeholder="Enter sender address"
                className="input input-bordered focus:input-primary w-full"
              />
              {errors.senderAddress && (
                <p className="text-red-500 mt-1">Sender address is required</p>
              )}
            </div>

            {/* Sender Email */}
            <div>
              <label className="label mb-2">
                <span className="label-text font-semibold">Sender Email</span>
              </label>

              <input
                type="email"
                {...register("senderEmail", { required: true })}
                placeholder="Enter sender email"
                className="input input-bordered focus:input-primary w-full"
              />
              {errors.senderEmail && <p className="text-red-500 mt-1">Sender email is required</p>}
            </div>

            {/* Sender region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender Regions</legend>
              <select {...register("senderRegion")} defaultValue="" className="select">
                {/* Default disabled option */}
                <option value="" disabled>
                  Pick a Region
                </option>
                {singleRegion.map((r, index) => (
                  <option key={index}>{r}</option>
                ))}
              </select>
            </fieldset>
            {/* sender district */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">District</legend>
              <select
                {...register("senderDistrict")}
                defaultValue="" // default value এখন খালি
                className="select"
              >
                {/* Default disabled option */}
                <option value="" disabled>
                  Pick a district
                </option>

                {/* Map districts */}
                {districtsByRegion(senderRegions).map((d, index) => (
                  <option key={index} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* Pickup Instruction */}
            <div>
              <label className="label mb-2">
                <span className="label-text font-semibold">Pickup Instruction</span>
              </label>
              <textarea
                {...register("pickupInstruction")}
                className="textarea textarea-bordered w-full focus:input-primary"
                placeholder="Write pickup instruction"
              ></textarea>
            </div>
          </div>

          {/* Receiver Details */}
          <div className=" w-full space-y-4">
            <h2 className="text-3xl font-semibold mb-3">Receiver Details</h2>

            {/* Receiver Name */}
            <div>
              <label className="label mb-2">
                <span className="label-text font-semibold">Receiver Name</span>
              </label>

              <input
                type="text"
                {...register("receiverName", { required: true })}
                placeholder="Enter receiver name"
                className="input input-bordered focus:input-primary w-full"
              />
              {errors.receiverName && (
                <p className="text-red-500 mt-1">Receiver name is required</p>
              )}
            </div>

            {/* Receiver Address */}
            <div>
              <label className="label mb-2">
                <span className="label-text font-semibold">Receiver Address</span>
              </label>

              <input
                type="text"
                {...register("receiverAddress", { required: true })}
                placeholder="Enter receiver address"
                className="input input-bordered focus:input-primary w-full"
              />
              {errors.receiverAddress && (
                <p className="text-red-500 mt-1">Receiver address is required</p>
              )}
            </div>

            {/* Receiver Email */}
            <div>
              <label className="label mb-2">
                <span className="label-text font-semibold">Receiver Email</span>
              </label>

              <input
                type="email"
                {...register("receiverEmail", { required: true })}
                placeholder="Enter receiver email"
                className="input input-bordered focus:input-primary w-full"
              />
              {errors.receiverEmail && (
                <p className="text-red-500 mt-1">Receiver email is required</p>
              )}
            </div>

            {/* Receiver District */}
            {/* Delivery Instruction */}
            <div>
              <label className="label mb-2">
                <span className="label-text font-semibold">Delivery Instruction</span>
              </label>
              <textarea
                {...register("deliveryInstruction")}
                className="textarea textarea-bordered w-full focus:input-primary"
                placeholder="Write delivery instruction"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-6 ">
          <button className="btn btn-primary px-10 shadow-lg shadow-primary/20 text-black">
            Process to Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendParcel;
