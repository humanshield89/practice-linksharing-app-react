import { CustomInput } from "../components/CustomInput";
import { AuthLayout } from "../layouts/AuthLayout";
import { Envelope } from "../svgs/Envelope";
import { Link } from "react-router-dom";
import { PadLock } from "../svgs/PadLock";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const navigate = useNavigate();
  return (
    <AuthLayout
      title={"Create account"}
      text="Let’s get you started sharing your links!"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/app/links");
        }}
        className="flex flex-col gap-4"
      >
        <CustomInput
          label={"Email address"}
          icon={<Envelope />}
          placeholder={"e.g. alex@email.com"}
          error=""
          type={"email"}
        />
        <CustomInput
          label={"Create password"}
          icon={<PadLock />}
          placeholder={"At least .8 characters"}
          error=""
          type={"password"}
        />
        <CustomInput
          label={"Confirm password"}
          icon={<PadLock />}
          placeholder={"At least .8 characters"}
          error=""
          type={"password"}
        />
        <button className="btn btn-primary capitalize">
          Create new account
        </button>
        <p className="text-secondary text-center">
          Already have an account?{" "}
          <Link className="text-primary " to="/">
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
