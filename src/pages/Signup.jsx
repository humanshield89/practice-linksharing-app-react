import { CustomInput } from "../components/CustomInput";
import { AuthLayout } from "../layouts/AuthLayout";
import { Envelope } from "../svgs/Envelope";
import { Link } from "react-router-dom";
import { PadLock } from "../svgs/PadLock";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../redux/slices/AuthSlice";
import { SpinnerIcon } from "../svgs/SpinnerIcon";
import { withGuestGuard } from "../hoc/withGuest";

/**
 * @typedef {Object} User
 * @property {string} email
 * @property {string} id
 */

/**
 * @typedef {Object} Session
 * @property {string} user
 * @property {string} token
 * @property {string} expires
 */

/**
 * @typedef {Object} AuthResponse
 * @property {string} message
 * @property {User} user
 * @property {Session} session
 */

/**
 * @param {string} email
 * @param {string} password
 * @returns {Promise<AuthResponse>}
 */
async function signup(email, password) {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/auth/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    },
  );

  /**
   * @type {AuthResponse}
   */
  const data = await res.json();

  if (res.ok) {
    return data;
  } else {
    throw new Error(data?.message || "Something Went Wrong");
  }
}

export function SignupWithoutGuard() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <AuthLayout
      title={"Create account"}
      text="Let’s get you started sharing your links!"
    >
      <form
        onSubmit={(e) => {
          setLoading(true);
          e.preventDefault();

          signup(email, password)
            .then((data) => {
              dispatch(
                setAuth({
                  user: data.user,
                  session: data.session,
                }),
              );
            })
            .catch((err) => {
              alert(err.message);
            })
            .finally(() => {
              setLoading(false);
            });
        }}
        className="flex flex-col gap-4"
      >
        <CustomInput
          label={"Email address"}
          icon={<Envelope />}
          placeholder={"e.g. alex@email.com"}
          error=""
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
          label={"Create password"}
          icon={<PadLock />}
          placeholder={"At least .8 characters"}
          error={passwordError}
          type={"password"}
          inputProps={{
            value: password,
            onChange: (e) => setPassword(e.target.value),
            onInput: () => {
              setPasswordError("");
            },
            onBlur: (e) => {
              // on blur is when this input loses focus
              if (!e.target.value) {
                setPasswordError("Password Required");
              } else if (
                e.target.value.length < 8 &&
                confirmPassword.length < 8
              ) {
                setPasswordError("Password must be at least 8 characters");
              } else if (
                confirmPassword &&
                e.target.value !== confirmPassword
              ) {
                setPasswordError("Passwords do not match");
              } else {
                setPasswordError("");
              }
            },
          }}
        />
        <CustomInput
          label={"Confirm password"}
          icon={<PadLock />}
          placeholder={"At least .8 characters"}
          error={passwordError}
          type={"password"}
          inputProps={{
            value: confirmPassword,
            onChange: (e) => setConfirmPassword(e.target.value),
            onInput: () => {
              setPasswordError("");
            },
            onBlur: (e) => {
              // on blur is when this input loses focus
              if (!e.target.value) {
                setPasswordError("Password Required");
              } else if (e.target.value.length < 8 && password.length < 8) {
                setPasswordError("Password must be at least 8 characters");
              } else if (password && e.target.value !== password) {
                setPasswordError("Passwords do not match");
              } else {
                setPasswordError("");
              }
            },
          }}
        />
        <button
          disabled={
            emailError ||
            !email ||
            !password ||
            !confirmPassword ||
            passwordError
          }
          className="btn btn-primary capitalize"
        >
          {loading ? <SpinnerIcon /> : "Create Account"}
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

export const Signup = withGuestGuard(SignupWithoutGuard);
