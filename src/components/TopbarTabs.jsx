import PropTypes from "prop-types";

/**
 * @typedef {Object} TopbarButtonProps
 * @property {JSX.Element} icon
 * @property {string} text
 * @property {boolean} active
 */

/**
 * @param {TopbarButtonProps} props
 * @returns
 */
export function TopbarButton({ icon, text, active }) {
  return (
    <button
      className={`px-2 md:px-8 btn ${
        active
          ? "bg-[var(--outline-bg)] text-primary hover:bg-primary hover:bg-opacity-20 bg-opacity-20"
          : "btn-ghost text-secondary hover:text-primary hover:bg-transparent"
      } hover:shadow-none`}
    >
      {icon}
      <span className="hidden md:inline">{text}</span>
    </button>
  );
}

TopbarButton.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
};
