import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * @typedef {Object} TopbarButtonProps
 * @property {JSX.Element} icon
 * @property {string} text
 * @property {boolean} active
 * @property {string} href
 */

/**
 * @param {TopbarButtonProps} props
 * @returns
 */
export function TopbarButton({ icon, text, active, href }) {
  return (
    <Link
      to={href}
      className={`px-2 md:px-8 btn ${
        active
          ? "bg-[var(--outline-bg)] text-primary hover:bg-primary hover:bg-opacity-20 bg-opacity-20"
          : "btn-ghost text-secondary hover:text-primary hover:bg-transparent"
      } hover:shadow-none`}
    >
      {icon}
      <span className="hidden md:inline">{text}</span>
    </Link>
  );
}

TopbarButton.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  href: PropTypes.string,
};
