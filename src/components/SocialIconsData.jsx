import { GithubIcon } from "../svgs/socials/GithubIcon";
import { LinkedInIcon } from "../svgs/socials/LinkedInIcon";
import {
  CodeWars,
  Devto,
  Facebook,
  FreeCodeCamp,
  FrontendMontors,
  Gitlab,
  Hashnode,
  StackOverFlow,
  Twitch,
  Twitter,
} from "../svgs/socials/SocialIcons";
import { YoutubeIcon } from "../svgs/socials/YoutubeIcon";

/**
 * @typedef {Object} SocialButtonType
 * @property {string} name
 * @property {JSX.Element} icon
 * @property {string} bgColor
 * @property {string} color
 * @property {string} borderColor
 */

/**
 * @type {Object.<string, SocialButtonType>}
 */
export const socials = {
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
  "dev.to": {
    icon: <Devto />,
    name: "Dev.to",
    bgColor: "#333333",
    color: "#FFFFFF",
  },
  "frontend mentor": {
    icon: <FrontendMontors />,
    name: "Frontend Mentor",
    color: "#333333",
    borderColor: "#D9D9D9",
    bgColor: "#FFFFFF",
  },
  codewars: {
    icon: <CodeWars />,
    name: "Codewars",
    color: "#fff",
    bgColor: "#8A1A50",
  },
  twitter: {
    icon: <Twitter />,
    name: "Twitter",
    color: "#fff",
    bgColor: "#1DA1F2",
  },
  freeCodeCamp: {
    icon: <FreeCodeCamp />,
    name: "freeCodeCamp",
    color: "#fff",
    bgColor: "#302267",
  },
  gitlab: {
    icon: <Gitlab />,
    name: "Gitlab",
    color: "#fff",
    bgColor: "#EB4925",
  },
  hashnode: {
    icon: <Hashnode />,
    name: "Hashnode",
    color: "#fff",
    bgColor: "#0330D1",
  },
  facebook: {
    icon: <Facebook />,
    name: "Facebook",
    color: "#fff",
    bgColor: "#2442AC",
  },
  stackoverflow: {
    icon: <StackOverFlow />,
    name: "Stackoverflow",
    color: "#fff",
    bgColor: "#EC7100",
  },
  twitch: {
    icon: <Twitch />,
    name: "Twitch",
    color: "#fff",
    bgColor: "#6441A5",
  },
};
