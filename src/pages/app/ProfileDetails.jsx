import { useState } from "react";
import { PictureIcon } from "../../svgs/PictureIcon";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmail,
  setFirstName,
  setLastName,
  setOriginalProfile,
  setProfile,
  setProfilePicture,
} from "../../redux/slices/ProfileSlice";
import { SpinnerIcon } from "../../svgs/SpinnerIcon";
import toast from "react-hot-toast";

const ProfileDetails = () => {
  const [file, setFile] = useState(null);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const ref = useRef(null);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const auth = useSelector((state) => state.auth);
  const [busy, setBusy] = useState(false);

  const hasChanged =
    profile.email != profile.originalProfile.email ||
    profile.firstName != profile.originalProfile.firstName ||
    profile.lastName != profile.originalProfile.lastName ||
    profile.profilePicture != profile.originalProfile.profilePicture;
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-[2em] font-bold">Profile Details</h1>
      <p className="text-secondary text-[1em] mb-[2.5em]">
        Add your details to create a personal touch to your profile.
      </p>

      <div className="flex-grow">
        <div className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 justify-start lg:justify-center items-center gap-3 p-5 bg-base-100 mb-[1.5em]">
          <p className="flex-grow text-secondary">Profile picture</p>
          <button
            onClick={() => ref.current.click()}
            className={`relative flex flex-col gap-2 ${
              selectedImageUrl ? "text-white" : "text-primary"
            } flex-grow py-4 lg:py-[3.8rem] lg:px-[2.38rem] bg-primary bg-opacity-10 rounded-xl justify-center items-center`}
          >
            <PictureIcon className={`z-10 `} />
            <span className="text-lg font-semibold z-10 ">
              + Upload Image
            </span>{" "}
            {selectedImageUrl && (
              <>
                <img
                  src={selectedImageUrl}
                  alt=""
                  className="absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full rounded-xl "
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 rounded-xl"></div>
              </>
            )}
          </button>
          <input
            onChange={(e) => {
              setFile(e.target.files[0]);
              setSelectedImageUrl(URL.createObjectURL(e.target.files[0]));
              dispatch(
                setProfilePicture(URL.createObjectURL(e.target.files[0])),
              );
            }}
            accept="image/png, image/jpeg"
            ref={ref}
            type="file"
            className="hidden"
          />
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
              value={profile.firstName}
              onChange={(e) => {
                dispatch(setFirstName(e.target.value));
              }}
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-1">
            <label className="text-secondary flex-grow text-base basis-1/3">
              Last name*
            </label>
            <input
              value={profile.lastName}
              onChange={(e) => {
                dispatch(setLastName(e.target.value));
              }}
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
              value={profile.email}
              onChange={(e) => {
                dispatch(setEmail(e.target.value));
              }}
              type="email"
              className="input input-bordered bg-base-200  flex-grow w-full md:basis-2/3"
              placeholder="e.g. email@example.com"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end py-2 border-t border-neutral mt-4">
        <button
          onClick={async () => {
            setBusy(true);
            try {
              // The easiest way to send a file to the backend is to use FormData
              // https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects
              // fetch will automatically set the correct headers for us when we use a FormData as body
              // on the backend we will use express-fileupload to manage uploaded files
              const formData = new FormData();

              formData.append("picture", file);
              formData.append("firstName", profile.firstName);
              formData.append("lastName", profile.lastName);
              formData.append("email", profile.email);

              const res = await fetch(
                `${import.meta.env.VITE_BACKEND_URL}/api/users/profile`,
                {
                  method: "PATCH",
                  headers: {
                    "session-token": `${auth.session.token}`,
                  },
                  body: formData,
                },
              );

              const data = await res.json();

              if (res.ok) {
                const rofile = data.profile;
                dispatch(setProfile(rofile));
                dispatch(setOriginalProfile(rofile));
                setSelectedImageUrl(null);
                setFile(null);
                toast.success("Profile updated successfully");
              } else {
                throw new Error(data.message);
              }
            } catch (e) {
              toast.error(e.message || "Something went wrong");
            } finally {
              setBusy(false);
            }
          }}
          disabled={!hasChanged || busy}
          className="btn btn-primary btn-outline"
        >
          {busy ? <SpinnerIcon /> : "Save"}
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;
