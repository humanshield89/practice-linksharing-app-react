import PropTypes from "prop-types";

export function Logo({ width, height, ...rest }) {
  return (
    <svg
      width={width || "34"}
      height={height || "34"}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5235 31.225C4.96683 33.6666 8.8935 33.6666 16.7502 33.6666C24.6068 33.6666 28.5352 33.6666 30.9752 31.225C33.4168 28.7866 33.4168 24.8566 33.4168 17C33.4168 9.14331 33.4168 5.21498 30.9752 2.77331C28.5368 0.333313 24.6068 0.333313 16.7502 0.333313C8.8935 0.333313 4.96516 0.333313 2.5235 2.77331C0.0834961 5.21665 0.0834961 9.14331 0.0834961 17C0.0834961 24.8566 0.0834961 28.785 2.5235 31.225ZM12.5835 11.5833C11.5122 11.5833 10.4649 11.901 9.57416 12.4962C8.68339 13.0914 7.98912 13.9373 7.57915 14.9271C7.16917 15.9169 7.06191 17.006 7.27091 18.0567C7.47991 19.1074 7.9958 20.0726 8.75333 20.8301C9.51087 21.5877 10.476 22.1036 11.5268 22.3126C12.5775 22.5216 13.6666 22.4143 14.6564 22.0043C15.6461 21.5944 16.4921 20.9001 17.0873 20.0093C17.6825 19.1186 18.0002 18.0713 18.0002 17C18.0002 16.6685 18.1319 16.3505 18.3663 16.1161C18.6007 15.8817 18.9186 15.75 19.2502 15.75C19.5817 15.75 19.8996 15.8817 20.134 16.1161C20.3685 16.3505 20.5002 16.6685 20.5002 17C20.5002 18.5657 20.0359 20.0964 19.166 21.3982C18.2961 22.7001 17.0597 23.7148 15.6131 24.314C14.1665 24.9132 12.5747 25.07 11.039 24.7645C9.50335 24.4591 8.09273 23.7051 6.98557 22.5979C5.8784 21.4907 5.12441 20.0801 4.81895 18.5444C4.51348 17.0088 4.67026 15.417 5.26945 13.9704C5.86864 12.5238 6.88334 11.2874 8.18523 10.4175C9.48712 9.54762 11.0177 9.08331 12.5835 9.08331C12.915 9.08331 13.233 9.21501 13.4674 9.44943C13.7018 9.68385 13.8335 10.0018 13.8335 10.3333C13.8335 10.6648 13.7018 10.9828 13.4674 11.2172C13.233 11.4516 12.915 11.5833 12.5835 11.5833ZM26.3335 17C26.3335 18.4366 25.7628 19.8143 24.747 20.8301C23.7312 21.846 22.3534 22.4166 20.9168 22.4166C20.5853 22.4166 20.2674 22.5483 20.0329 22.7828C19.7985 23.0172 19.6668 23.3351 19.6668 23.6666C19.6668 23.9982 19.7985 24.3161 20.0329 24.5505C20.2674 24.785 20.5853 24.9166 20.9168 24.9166C22.4826 24.9166 24.0132 24.4523 25.3151 23.5824C26.617 22.7126 27.6317 21.4761 28.2309 20.0296C28.8301 18.583 28.9868 16.9912 28.6814 15.4555C28.3759 13.9198 27.6219 12.5092 26.5148 11.4021C25.4076 10.2949 23.997 9.5409 22.4613 9.23543C20.9256 8.92996 19.3338 9.08674 17.8873 9.68593C16.4407 10.2851 15.2043 11.2998 14.3344 12.6017C13.4645 13.9036 13.0002 15.4342 13.0002 17C13.0002 17.3315 13.1319 17.6494 13.3663 17.8839C13.6007 18.1183 13.9186 18.25 14.2502 18.25C14.5817 18.25 14.8996 18.1183 15.134 17.8839C15.3685 17.6494 15.5002 17.3315 15.5002 17C15.5002 15.5634 16.0708 14.1856 17.0867 13.1698C18.1025 12.154 19.4802 11.5833 20.9168 11.5833C22.3534 11.5833 23.7312 12.154 24.747 13.1698C25.7628 14.1856 26.3335 15.5634 26.3335 17Z"
        fill="#633CFF"
      />
    </svg>
  );
}

Logo.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};