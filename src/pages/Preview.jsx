import { Link } from "react-router-dom";
import { SocialButton } from "../components/SocialButton";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { ProfilePicture } from "../components/PhonePreview";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProfile } from "../redux/slices/ProfileSlice";
import toast from "react-hot-toast";

function Preview() {
  const auth = useSelector((store) => store.auth);
  const profile = useSelector((store) => store.profile);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    // if id is not the same as auth.user.id, fetch the profile
    if (id !== auth.user?.id) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/profile/${id}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(setProfile(data.profile));
        })
        .catch((e) => {
          toast.error(e.message || "Something went wrong");
        });
    }
  }, [id, dispatch, auth.user?.id]);

  return (
    <div className="max-h-screen overflow-auto h-screen w-full relative ">
      <header className="md:h-[22.31rem] bg-base-100 md:bg-primary rounded-b-3xl p-4  ">
        {auth.user && auth.session && (
          <nav className="flex justify-between p-4 md:bg-base-200 rounded-lg">
            <Link to="/app/links" className="btn btn-primary btn-outline">
              Back to Editor
            </Link>

            <button
              onClick={() => {
                // use share api to share the link
                if (navigator.share)
                  navigator.share({
                    title: `${profile.firstName} ${profile.lastName}'s devlinks profile`,
                    url: `${window.location.origin}/p/${id}`,
                  });
                else {
                  // fallback to copy to clipboard
                  navigator.clipboard.writeText(
                    `${window.location.origin}/p/${id}`,
                  );
                  toast.success("Link copied to clipboard");
                }
              }}
              className="btn btn-primary "
            >
              Share Link
            </button>
          </nav>
        )}
      </header>

      <div className="flex min-h-[500px] gap-[1em] flex-col items-center rounded-3xl md:shadow-2xl min-w-[360px] max-w-md bg-base-100 md:bg-base-200 md:absolute md:top-[50%]  md:left-[50%]  md:translate-x-[-50%]  md:translate-y-[-50%]  md:px-[3.5rem] px-4  md:py-[3rem]">
        <ProfilePicture
          profile={profile}
          className="w-[6.5rem] h-[6.5rem] rounded-full border-4 border-primary"
          alt="preview"
          border="0"
        />
        <h1 className="text-[2em] font-bold">
          {profile.firstName} {profile.lastName}
        </h1>
        <p className="text-secondary mb-4 md:mb-14 -mt-4">{profile.email}</p>
        <div className="flex flex-col gap-5 w-full items-center">
          {profile.links.map((link, i) => {
            return <SocialButton key={i} name={link.name} href={link.url} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Preview;
