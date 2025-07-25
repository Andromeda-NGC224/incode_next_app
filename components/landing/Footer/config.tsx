import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

export const footerLinks = Object.freeze({
  company: [
    "Donec dignissim",
    "Curabitur egestas",
    "Nam posuere",
    "Aenean facilisis",
  ],
  services: [
    "Cras convallis",
    "Vestibulum faucibus",
    "Quisque lacinia purus",
    "Aliquam nec ex",
  ],
  legal: ["Suspendisse porttitor", "Nam posuere", "Curabitur egestas"],
});

export const socialLinks = Object.freeze([
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: FaFacebookF,
  },
  {
    href: "https://youtube.com",
    label: "YouTube",
    icon: FaYoutube,
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    icon: FaTwitter,
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: FaInstagram,
  },
]);
