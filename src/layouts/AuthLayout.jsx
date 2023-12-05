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
    <div className="m-auto flex flex-col gap-7 md:gap-14">
      <h1 className="flex justify-center gap-2 items-center font-bold text-3xl ">
        <Logo width="40" height="40" />
        devlinks
      </h1>
      <div className="md:bg-base-200 md:shadow-lg p-4 md:p-10 flex flex-col gap-6 rounded-xl">
        <h2 className="md:text-5xl text-4xl font-bold">{title}</h2>
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
