import {
  FaMeetup,
  FaDiscord,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import FooterColumnTitle from "./FooterColumnTitle";

const socialLinksGroup1 = [
  {
    href: "https://discord.gg/yHNKkvMN5e",
    icon: FaDiscord,
  },
  {
    href: "https://www.meetup.com/Sydney-Volunteer-Programmers/",
    icon: FaMeetup,
  },
  {
    href: "https://www.linkedin.com/company/code.sydney/",
    icon: FaLinkedinIn,
  },
  {
    href: "https://www.instagram.com/code.sydney/",
    icon: FaInstagram,
  },
];
const socialLinksGroup2 = [
  {
    href: "https://www.facebook.com/codesyd/",
    icon: FaFacebookF,
  },
  {
    href: "https://twitter.com/code_sydney",
    icon: FaTwitter,
  },
  {
    href: "https://www.youtube.com/channel/UCnOp_l8-EX3c-q2Tlj-2Iyw",
    icon: FaYoutube,
  },
  {
    href: "https://github.com/codesydney",
    icon: FaGithub,
  },
];

export default function FooterSocialLinks() {
  return (
    <div className="flex flex-col items-center col-span-2 md:col-span-1 lg:items-end">
      <FooterColumnTitle>Social</FooterColumnTitle>
      <div className="flex flex-wrap justify-center md:flex-col md:items-center lg:items-start">
        <div className="flex">
          {socialLinksGroup1 &&
            socialLinksGroup1.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  className="group relative cursor-pointer block py-1 rounded-full text-custom-light px-2 lg:px-0 lg:pl-4"
                  href={link.href}
                >
                  <IconComponent className="text-3xl group-hover:text-custom-primary transition-all duration-200" />
                </a>
              );
            })}
        </div>
        <div className="flex">
          {socialLinksGroup2 &&
            socialLinksGroup2.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  className="group relative cursor-pointer block py-1 rounded-full text-custom-light px-2 lg:px-0 lg:pl-4"
                  href={link.href}
                >
                  <IconComponent className="text-3xl group-hover:text-custom-primary transition-all duration-200" />
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
}
