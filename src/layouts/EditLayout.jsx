import { Logo } from "../svgs/Logo";
import { TopbarButton } from "../components/TopbarTabs";
import { LinkIcon } from "../svgs/LinkIcon";
import { EyeIcon } from "../svgs/EyeIcon";
import { ProfileIcon } from "../svgs/ProfileIcon";
import { PhonePreview } from "../components/PhonePreview";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="p-4 shadow-sm rounded-lg bg-base-200 flex justify-between items-center w-full">
      <div className="flex text-3xl font-bold gap-1 items-center">
        <Logo />
        <h1 className="hidden md:inline-block">devlinks</h1>
      </div>
      <div className="flex gap-2">
        <TopbarButton
          href="/app/links"
          icon={<LinkIcon />}
          text="Links"
          active={location.pathname === "/app/links"}
        />
        <TopbarButton
          href="/app/profile"
          icon={<ProfileIcon />}
          text="Profile details"
          active={location.pathname === "/app/profile"}
        />
      </div>
      <Link to="/p" className="btn btn-primary btn-outline">
        <span className="hidden md:inline">Preview</span>
        <EyeIcon className="md:hidden" />
      </Link>
    </header>
  );
};

const EditLayout = () => {
  return (
    <div className="min-h-screen gap-6 flex flex-col p-1 md:p-4 w-full">
      <Header />
      <main className="flex flex-grow gap-6">
        <div className="bg-base-200 rounded-lg shadow-sm hidden lg:flex basis-1/3">
          <PhonePreview />
        </div>
        <div className="bg-base-200 rounded-lg shadow-sm flex flex-col md:basis-2/3 p-[1.5em] md:p-[2.5em]">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default EditLayout;