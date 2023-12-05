import { ArrowRightIcon } from "../svgs/ArrowRightIcon";
import { GithubIcon } from "../svgs/socials/GithubIcon";
import { LinkedInIcon } from "../svgs/socials/LinkedInIcon";
import { YoutubeIcon } from "../svgs/socials/YoutubeIcon";
import propTypes from "prop-types";

/**
 * @typedef {Object} SocialButtonType
 * @property {string} name
 * @property {JSX.Element} icon
 * @property {string} bgColor
 * @property {string} color
 */

/**
 * @type {Object.<string, SocialButtonType>}
 */
const socials = {
  github: {
    icon: <GithubIcon />,
    name: "Github",
    bgColor: "#1A1A1A",
    color: "#FFFFFF",
  },
  youtube: {
    icon: <YoutubeIcon />,
    name: "Youtube",
    bgColor: "#EE3939",
    color: "#FFFFFF",
  },
  linkedin: {
    icon: <LinkedInIcon />,
    name: "Linkedin",
    bgColor: "#2D68FF",
    color: "#FFFFFF",
  },
};

/**
 * @typedef {Object} SocialButtonProps
 * @property {string} name
 */

/**
 *
 * @param {SocialButtonProps} param0
 * @returns
 */
export function SocialButton({ name }) {
  const social = socials[name];

  return (
    <button
      className={`w-full flex justify-between items-center p-4 hover:scale-105 transform transition-all rounded-lg`}
      style={{ backgroundColor: social.bgColor, color: social.color }}
    >
      <div className="flex gap-2">
        {social.icon}
        <span> {social.name}</span>
      </div>
      <ArrowRightIcon />
    </button>
  );
}

SocialButton.propTypes = {
  name: propTypes.oneOf(["github", "youtube", "linkedin"]),
};
