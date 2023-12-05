import { useState } from "react";
import { PictureIcon } from "../../svgs/PictureIcon";

const ProfileDetails = () => {
  const [file, setFile] = useState(null);

  return (
    <div className="flex flex-col h-full">
      <h1 className="text-[2em] font-bold">Profile Details</h1>
      <p className="text-secondary text-[1em] mb-[2.5em]">
        Add your details to create a personal touch to your profile.
      </p>

      <div className="flex-grow">
        <div className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 justify-start lg:justify-center items-center gap-3 p-5 bg-base-100 mb-[1.5em]">
          <p className="flex-grow text-secondary">Profile picture</p>
          <button className="flex flex-col gap-2 text-primary flex-grow py-4 lg:py-[3.8rem] lg:px-[2.38rem] bg-primary bg-opacity-10 rounded-xl justify-center items-center">
            <PictureIcon />
            <span className="text-lg font-semibold ">+ Upload Image</span>
          </button>
          <p className="flex-grow text-secondary lg:ml-6">
            Image must be below 1024x1024px. Use PNG or JPG format.
          </p>
        </div>

        <div className="flex flex-col justify-center items-stretch gap-3 p-5 bg-base-100 mb-[1.5em]">
          <div className="flex flex-col md:flex-row md:items-center gap-1">
            <label className="text-secondary flex-grow text-base basis-1/3">
              First name*
            </label>
            <input
              type="text"
              className="input input-bordered bg-base-200  flex-grow w-full md:basis-2/3"
              placeholder="e.g. John"
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-1">
            <label className="text-secondary flex-grow text-base basis-1/3">
              Last name*
            </label>
            <input
              type="text"
              className="input input-bordered bg-base-200 flex-grow w-full md:basis-2/3"
              placeholder="e.g. Appleseed"
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-1">
            <label className="text-secondary flex-grow text-base basis-1/3">
              Email
            </label>
            <input
              type="email"
              className="input input-bordered bg-base-200  flex-grow w-full md:basis-2/3"
              placeholder="e.g. email@example.com"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end py-2 border-t border-neutral mt-4">
        <button disabled className="btn btn-primary btn-outline">
          Save
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;
