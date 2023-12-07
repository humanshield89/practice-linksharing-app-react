import PropTypes from "prop-types";

/**
 * @typedef {Object} SpinnerIconProps
 * @property {string} className
 * @property {number} width
 * @property {number} height
 */

/**
 * @param {SpinnerIconProps} param0
 * @returns {JSX.Element}
 */
export function LogoutIcon({ className, width, height, ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`feather feather-log-out ${className}`}
      {...rest}
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
      <polyline points="16 17 21 12 16 7"></polyline>
      <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>
  );
}

LogoutIcon.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
