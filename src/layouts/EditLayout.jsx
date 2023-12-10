import { Logo } from "../svgs/Logo";
import { TopbarButton } from "../components/TopbarTabs";
import { LinkIcon } from "../svgs/LinkIcon";
import { EyeIcon } from "../svgs/EyeIcon";
import { ProfileIcon } from "../svgs/ProfileIcon";
import { PhonePreview } from "../components/PhonePreview";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { LogoutIcon } from "../svgs/LogoutIcon";
import { useDispatch } from "react-redux";
import { setAuth } from "../redux/slices/AuthSlice";
import { withAuthGuard } from "../hoc/withAuth";
import { useSelector } from "react-redux";

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

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
      <div className="flex gap-1">
        <Link to={`/p/${auth.user.id}`} className="btn btn-primary btn-outline">
          <span className="hidden md:inline">Preview</span>
          <EyeIcon className="md:hidden" />
        </Link>
        <button
          className="text-primary hover:text-primary-focus p-2 tooltip"
          data-tip="Logout"
          onClick={() => {
            dispatch(setAuth({ user: null, session: null }));
          }}
        >
          <LogoutIcon />
        </button>
      </div>
    </header>
  );
};

const EditLayout = () => {
  return (
    <div className="max-h-screen min-h-screen gap-6 flex flex-col p-1 md:p-4 w-full">
      <Header />
      <main className="flex flex-grow gap-6 ">
        <div className="bg-base-200 rounded-lg shadow-sm hidden lg:flex basis-1/3">
          <PhonePreview />
        </div>
        <div
          style={
            {
              // probably not the best way to do this but it works
              //maxHeight: "calc(100vh - 4em - 76px)",
            }
          }
          className="bg-base-200 max-h-[calc(100vh-5em)] md:max-h-[calc(100vh-4em-76px)] rounded-lg shadow-sm flex flex-col basis-full lg:basis-2/3 p-[0.5em] md:p-[2.5em]"
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
};

const EditLayoutWithGuard = withAuthGuard(EditLayout);

export default EditLayoutWithGuard;
