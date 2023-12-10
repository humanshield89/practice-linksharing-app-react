import { useSelector } from "react-redux";
import { AddLink } from "../../svgs/AddLink";
import { useDispatch } from "react-redux";
import {
  addLink,
  removeLink,
  setOriginalProfile,
  setProfile,
  updateLink,
} from "../../redux/slices/ProfileSlice";
import { DragIcon } from "../../svgs/DragIcon";
import { CustomSelect } from "../../components/CustomSelect";
import { CustomInput } from "../../components/CustomInput";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { useState } from "react";
import { SpinnerIcon } from "../../svgs/SpinnerIcon";

const options = [
  "github",
  "frontend mentor",
  "twitter",
  "linkedin",
  "youtube",
  "facebook",
  "twitch",
  "dev.to",
  "codewars",
  "freeCodeCamp",
  "gitlab",
  "hashnode",
  "stackoverflow",
];

export function Customize() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const auth = useSelector((state) => state.auth);
  const [busy, setBusy] = useState(false);

  const selectedOptions = profile.links.map((link) => link.name);

  const hasChanged =
    JSON.stringify({
      firstName: profile.firstName,
      lastName: profile.lastName,
      email: profile.email,
      links: profile.links,
    }) !== JSON.stringify(profile.originalProfile);

  return (
    <>
      <h1 className="text-[1.5em] md:text-[2em] font-bold ">
        Customize your links
      </h1>
      <p className="text-secondary">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <button
        onClick={() => {
          dispatch(
            addLink({
              // set name to the first non selected option,
              name: options.find((option) => !selectedOptions.includes(option)),
              url: "",
            }),
          );
        }}
        className="btn btn-primary btn-outline w-full mt-[2.5em]"
      >
        + Add new link
      </button>
      <>
        {profile.links.length === 0 ? (
          <div className="bg-base-100 mt-4 flex-grow rounded-md py-[2.5em] flex flex-col justify-center items-center gap-4">
            <AddLink />
            <h2 className="text-[1.5em] md:text-[2em] font-bold m-auto w-full md:w-[30rem] text-center">
              Let’s get you started
            </h2>
            <p className="text-secondary  w-full md:w-[30rem] m-auto text-center">
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We’re here to help
              you share your profiles with everyone!
            </p>
          </div>
        ) : (
          <div className="flex-grow rounded-md py-[1em] flex flex-col justify-start items-center gap-4 overflow-y-auto">
            {profile.links.map((link, index) => {
              return (
                <div
                  key={link.name}
                  className="bg-base-100 p-5 w-full flex flex-col items-stretch gap-3"
                >
                  <div className="flex justify-between">
                    <div className="flex gap-2 text-secondary  items-center">
                      <DragIcon />
                      <span className="font-bold">Link #{index + 1}</span>
                    </div>
                    <button
                      onClick={() => {
                        dispatch(removeLink(index));
                      }}
                      className="hover:text-error"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="flex flex-col gap-2 items-stretch">
                    <label>Platform</label>
                    <CustomSelect
                      selected={link.name}
                      onSelect={(option) => {
                        dispatch(
                          updateLink({
                            index,
                            name: option,
                          }),
                        );
                      }}
                      selectedOptions={profile.links.map((link) => link.name)}
                      options={options}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label>Link</label>
                    <CustomInput
                      error={link.error}
                      inputProps={{
                        className: "bg-base-200",
                        onChange: (e) => {
                          dispatch(
                            updateLink({
                              index,
                              url: e.target.value,
                              error: "",
                            }),
                          );
                        },
                        value: link.url,
                      }}
                      type="text"
                      placeholder="e.g. https://www.github.com/johnappleseed"
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M7.52312 10.7207C7.59304 10.7903 7.64852 10.8731 7.68637 10.9643C7.72423 11.0555 7.74371 11.1532 7.74371 11.2519C7.74371 11.3506 7.72423 11.4484 7.68637 11.5395C7.64852 11.6307 7.59304 11.7135 7.52312 11.7832L7.15187 12.1544C6.44838 12.8579 5.49425 13.2531 4.49937 13.2531C3.50449 13.2531 2.55036 12.8579 1.84687 12.1544C1.14338 11.4509 0.748169 10.4968 0.748169 9.5019C0.748169 8.50702 1.14338 7.55289 1.84687 6.8494L3.35437 5.34253C4.0303 4.66493 4.93973 4.27142 5.89639 4.2426C6.85304 4.21378 7.78451 4.55184 8.5 5.18753C8.57386 5.25319 8.63408 5.33276 8.67719 5.42169C8.72031 5.51062 8.74549 5.60717 8.7513 5.70583C8.7571 5.8045 8.74341 5.90333 8.71102 5.99671C8.67863 6.09008 8.62816 6.17616 8.5625 6.25003C8.49683 6.3239 8.41727 6.38411 8.32834 6.42723C8.2394 6.47035 8.14285 6.49552 8.04419 6.50133C7.94553 6.50713 7.84669 6.49345 7.75331 6.46105C7.65994 6.42866 7.57386 6.37819 7.5 6.31253C7.07094 5.93148 6.51252 5.72877 5.93894 5.74584C5.36537 5.76292 4.81999 5.9985 4.41437 6.4044L2.90812 7.9094C2.48609 8.33143 2.249 8.90382 2.249 9.50065C2.249 10.0975 2.48609 10.6699 2.90812 11.0919C3.33015 11.5139 3.90254 11.751 4.49937 11.751C5.0962 11.751 5.66859 11.5139 6.09062 11.0919L6.46187 10.7207C6.53153 10.6509 6.61424 10.5956 6.70529 10.5579C6.79634 10.5201 6.89393 10.5007 6.9925 10.5007C7.09106 10.5007 7.18865 10.5201 7.2797 10.5579C7.37075 10.5956 7.45346 10.6509 7.52312 10.7207ZM12.1531 1.84565C11.4491 1.14325 10.4951 0.748779 9.50062 0.748779C8.5061 0.748779 7.55218 1.14325 6.84812 1.84565L6.47687 2.2169C6.33597 2.3578 6.25682 2.54889 6.25682 2.74815C6.25682 2.94741 6.33597 3.13851 6.47687 3.2794C6.61777 3.4203 6.80886 3.49945 7.00812 3.49945C7.20738 3.49945 7.39847 3.4203 7.53937 3.2794L7.91062 2.90815C8.33265 2.48613 8.90504 2.24903 9.50187 2.24903C10.0987 2.24903 10.6711 2.48613 11.0931 2.90815C11.5151 3.33018 11.7522 3.90257 11.7522 4.4994C11.7522 5.09624 11.5151 5.66863 11.0931 6.09065L9.58625 7.59815C9.18027 8.00388 8.63459 8.23912 8.06087 8.25574C7.48715 8.27235 6.92877 8.06908 6.5 7.68753C6.42613 7.62187 6.34005 7.5714 6.24668 7.539C6.1533 7.50661 6.05446 7.49292 5.9558 7.49873C5.85714 7.50453 5.76059 7.52971 5.67165 7.57283C5.58272 7.61595 5.50316 7.67616 5.4375 7.75003C5.37183 7.8239 5.32137 7.90997 5.28897 8.00335C5.25658 8.09672 5.24289 8.19556 5.24869 8.29422C5.2545 8.39288 5.27968 8.48944 5.3228 8.57837C5.36591 8.6673 5.42613 8.74687 5.5 8.81253C6.21498 9.44807 7.14583 9.78634 8.10203 9.75811C9.05824 9.72987 9.9675 9.33727 10.6437 8.66065L12.1512 7.15378C12.8545 6.44989 13.2496 5.49571 13.25 4.50073C13.2503 3.50575 12.8558 2.55129 12.1531 1.8469V1.84565Z"
                            fill="#737373"
                          />
                        </svg>
                      }
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </>
      <div className="flex justify-end py-2 border-t border-neutral mt-4">
        <button
          onClick={async () => {
            // check that all links have a url
            let hasError = false;
            profile.links.forEach((link, index) => {
              if (!link.url) {
                dispatch(
                  updateLink({
                    index,
                    error: "Link Required",
                  }),
                );
                toast.error(`Link #${index + 1} is missing a url`);
                hasError = true;
              }

              // check that it is a valid url
              if (link.url && !link.url.includes("http")) {
                // add https
                dispatch(
                  updateLink({
                    index,
                    url: `https://${link.url}`,
                  }),
                );
                hasError = true;
              }
            });
            if (hasError) return;
            setBusy(true);
            try {
              const res = await fetch(
                import.meta.env.VITE_BACKEND_URL + "/api/users/profile",
                {
                  method: "PATCH",
                  headers: {
                    "Content-Type": "application/json",
                    "session-token": auth.session.token,
                  },
                  body: JSON.stringify({
                    links: profile.links,
                  }),
                },
              );
              const data = await res.json();

              if (res.ok) {
                dispatch(setProfile(data.profile));
                dispatch(setOriginalProfile(data.profile));
                toast.success("Profile Updated");
              } else {
                throw new Error(data?.message || "Something Went Wrong");
              }
            } catch (e) {
              toast.error(e.message);
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
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
}

export default Customize;
