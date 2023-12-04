import { Logo } from "../svgs/Logo";
import PropTypes from "prop-types";

/**
 * @typedef {Object} AuthLayoutProps
 * @property {JSX.Element} children
 * @property {string} text
 * @property {string} title
 */

/**
 *
 * @param {AuthLayoutProps} props
 * @returns
 */
export function AuthLayout({ children, text, title }) {
  return (
    <div className="m-auto flex flex-col gap-14">
      <h1 className="flex justify-center gap-2 items-center font-bold text-3xl ">
        <Logo width="40" height="40" />
        devlinks
      </h1>
      <div className="bg-base-200 shadow-sm p-10 flex flex-col gap-6">
        <h2 className="text-5xl font-bold">{title}</h2>
        <p className="text-secondary">{text}</p>
        {children}
      </div>
    </div>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element,
  text: PropTypes.string,
  title: PropTypes.string,
};
