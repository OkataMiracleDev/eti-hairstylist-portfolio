import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { ReactNode } from "react";

export type FootLink = {
  id: number;
  label: string | ReactNode; // Allows label to be a string OR a React element (JSX)
  url: string;
};

export const navLinks = [
  {
    id: 1,
    url: "#",
    label: "Gallery",
  },
  {
    id: 2,
    url: "#",
    label: "Contact",
  },
];

export const footLinks: FootLink[] = [
  {
    id: 1,
    // JSX is valid here because the file is .tsx
    label: <FaInstagram className="text-xl" />,
    url: "https://www.instagram.com/style_by.eti/", // Pro tip: use the actual URL here!
  },
  // {
  //   id: 2,
  //   // JSX is valid here because the file is .tsx
  //   label: <FaGithub className="text-xl" />,
  //   url: "https://github.com/OkataMiracleDev", // Pro tip: use the actual URL here!
  // },
];
