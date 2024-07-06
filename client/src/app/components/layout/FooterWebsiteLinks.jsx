import FooterColumnTitle from "./FooterColumnTitle";
import NavLink from "./NavLink";

const footerLinks = [
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Team",
    href: "/team",
  },
  {
    text: "Teachies4Good",
    href: "/teachies4Good",
  },
  {
    text: "Apps4Good",
    href: "/apps4good",
  },
];

export default function FooterWebsiteLinks({ isActive }) {
  return (
    <div className="flex flex-col items-center lg:items-end">
      <FooterColumnTitle>Organisation</FooterColumnTitle>
      <ul>
        {footerLinks &&
          footerLinks.map((footerLink, index) => {
            return (
              <li key={index} className="text-center lg:text-end py-1">
                <NavLink
                  href={footerLink.href}
                  text={footerLink.text}
                  isActive={isActive(footerLink.href)}
                  isButtonStyle={true}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
