import { Link } from "react-router-dom";
import { SocialButton } from "../components/SocialButton";
import { useSelector } from "react-redux";

function Preview() {
  const auth = useSelector((store) => store.auth);

  return (
    <div className="max-h-screen overflow-auto h-screen w-full relative ">
      <header className="md:h-[22.31rem] bg-base-100 md:bg-primary rounded-b-3xl p-4  ">
        {auth.user && auth.session && (
          <nav className="flex justify-between p-4 md:bg-base-200 rounded-lg">
            <Link to="/app/links" className="btn btn-primary btn-outline">
              Back to Editor
            </Link>

            <button className="btn btn-primary ">Share Link</button>
          </nav>
        )}
      </header>

      <div className="flex gap-[1em] flex-col items-center rounded-3xl md:shadow-2xl min-w-[360px] max-w-md bg-base-100 md:bg-base-200 md:absolute md:top-[50%]  md:left-[50%]  md:translate-x-[-50%]  md:translate-y-[-50%]  md:px-[3.5rem] px-4  py-[3rem]">
        <img
          className="w-[6.5rem] h-[6.5rem] rounded-full border-4 border-primary"
          src="https://randomuser.me/api/portraits/men/99.jpg"
          alt="preview"
          border="0"
        />
        <h1 className="text-[2em] font-bold">Ben Wright</h1>
        <p className="text-secondary mb-14 -mt-4">ben@example.com</p>
        <div className="flex flex-col gap-5 w-full">
          <SocialButton name="github" />
          <SocialButton name="youtube" />
          <SocialButton name="linkedin" />
        </div>
      </div>
    </div>
  );
}

export default Preview;
