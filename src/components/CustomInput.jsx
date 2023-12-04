import PropTypes from "prop-types";

/**
 * @typedef {Object} CustomInputProps
 * @property {JSX.Element} icon
 * @property {string} error
 * @property {string} placeholder
 * @property {string} label
 * @property {string} type
 */

/**
 *
 * @param {CustomInputProps} props
 * @returns {JSX.Element}
 */
export const CustomInput = ({ icon, error, placeholder, label, type }) => {
  return (
    <div className="flex flex-col gap-0">
      {label && <label className="label label-text-alt">{label}</label>}
      <div className="relative">
        {icon && <div className="absolute left-2 top-4">{icon}</div>}
        <input
          className="input input-bordered w-full pl-10"
          type={type || "text"}
          placeholder={placeholder}
        />
        {error && (
          <div className="absolute right-2 top-4 text-xs text-error">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

CustomInput.propTypes = {
  icon: PropTypes.element,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
};
