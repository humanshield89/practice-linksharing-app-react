import { Link } from "react-router-dom";
import { Envelope } from "../svgs/Envelope";
import { PadLock } from "../svgs/PadLock";
import { CustomInput } from "../components/CustomInput";
import { AuthLayout } from "../layouts/AuthLayout";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  return (
    <>
      <AuthLayout
        title={"Login"}
        text="Add your details below to get back into the app"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/app/links");
          }}
          className="flex flex-col gap-6"
        >
          <CustomInput
            label={"Email address"}
            icon={<Envelope />}
            placeholder={"e.g. alex@email.com"}
            error=""
            type={"email"}
          />
          <CustomInput
            label={"Password"}
            icon={<PadLock />}
            placeholder={"********"}
            error=""
            type={"password"}
          />

          <button className="btn btn-primary capitalize">Login</button>

          <p className="text-secondary text-center">
            Don’t have an account?{" "}
            <Link className="text-primary" to="/signup">
              Create account
            </Link>
          </p>
        </form>
      </AuthLayout>
    </>
  );
}
