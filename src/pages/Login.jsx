import { Link } from "react-router-dom";
import { Envelope } from "../svgs/Envelope";
import { PadLock } from "../svgs/PadLock";
import { CustomInput } from "../components/CustomInput";
import { AuthLayout } from "../layouts/AuthLayout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SpinnerIcon } from "../svgs/SpinnerIcon";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAuth } from "../redux/slices/AuthSlice";
import { withGuestGuard } from "../hoc/withGuest";

async function login(email, password) {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    },
  );

  const data = await res.json();

  if (res.ok) {
    return data;
  } else {
    throw new Error(data?.message || "Something Went Wrong");
  }
}

function LoginWithoutGuard() {
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <>
      <AuthLayout
        title={"Login"}
        text="Add your details below to get back into the app"
      >
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);

            await login(email, password)
              .catch((err) => {
                alert(err.message);
              })
              .finally(() => {
                setLoading(false);
              })
              .then((data) => {
                dispatch(
                  setAuth({
                    user: data.user,
                    session: data.session,
                  }),
                );
              });
          }}
          className="flex flex-col gap-6"
        >
          <CustomInput
            label={"Email address"}
            icon={<Envelope />}
            placeholder={"e.g. alex@email.com"}
            error={emailError}
            type={"email"}
            inputProps={{
              value: email,
              onChange: (e) => setEmail(e.target.value),
              onInput: () => {
                setEmailError("");
              },
              onBlur: (e) => {
                // on blur is when this input loses focus
                if (!e.target.value) {
                  setEmailError("Email Required");
                } else if (!e.target.validity.valid) {
                  setEmailError("Invalid email");
                } else {
                  setEmailError("");
                }
              },
            }}
          />
          <CustomInput
            label={"Password"}
            icon={<PadLock />}
            placeholder={"********"}
            error=""
            type={"password"}
            inputProps={{
              value: password,
              onChange: (e) => setPassword(e.target.value),
            }}
          />

          <button
            disabled={emailError || !email || !password || loading}
            className="btn btn-primary capitalize justify-center blo"
          >
            {loading ? <SpinnerIcon /> : "Login"}
          </button>

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

export const Login = withGuestGuard(LoginWithoutGuard);
