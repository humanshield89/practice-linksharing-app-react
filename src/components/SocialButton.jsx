import { ArrowRightIcon } from "../svgs/ArrowRightIcon";

import propTypes from "prop-types";
import { socials } from "./SocialIconsData";

/**
 * @typedef {Object} SocialButtonProps
 * @property {string} name
 */

/**
 *
 * @param {SocialButtonProps} param0
 * @returns
 */
export function SocialButton({ name, href }) {
  const social = socials[name];

  if (!social) {
    throw new Error(`Social ${name} does not exist`);
  }

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={href}
      className={`w-full flex justify-between items-center p-3 hover:scale-105 transform transition-all rounded-xl`}
      style={{
        backgroundColor: social.bgColor,
        color: social.color,
        border: `1px solid ${social.color || "transparent"}`,
      }}
    >
      <div className="flex gap-2">
        {social.icon}
        <span> {social.name}</span>
      </div>
      <ArrowRightIcon />
    </a>
  );
}

SocialButton.propTypes = {
  name: propTypes.oneOf([
    "github",
    "frontend mentor",
    "twitter",
    "linkedin",
    "youtube",
    "facebook",
    "twitch",
    "dev.to",
    "codewars",
    "codepen",
    "freeCodeCamp",
    "gitlab",
    "hashnode",
    "stackoverflow",
  ]),
  href: propTypes.string,
};
