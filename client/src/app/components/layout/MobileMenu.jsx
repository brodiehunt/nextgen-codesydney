import { motion } from "framer-motion";
import NavLink from "./NavLink";
import {
  menuSlide,
  containerVariants,
  linkVariants,
  navButtonVariants,
} from "../../../utils/animationObjects.js";

const SvgCurve = () => {
  const initialPath = `M0 100 L0 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 0 0`;
  return (
    <svg className="absolute top-0 right-[-100px] w-[100px] h-[100%] fill-custom-dark/90 stroke-none">
      <path d={initialPath}></path>
    </svg>
  );
};

export default function MobileDropdown({ navLinks, isActive, pathname }) {
  return (
    <motion.div
      variants={menuSlide}
      animate="enter"
      initial="initial"
      exit="exit"
      className="absolute w-full h-[calc(100svh)] top-[0] left-[0] flex lg:hidden"
    >
      <motion.ul
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="h-[100%] bg-custom-dark/90 flex flex-col min-w-[300px] items-stretch gap-4 p-8 pt-[100px] relative"
      >
        <SvgCurve />
        {navLinks &&
          navLinks.map((link, index) => {
            return (
              <motion.li
                key={index}
                variants={
                  index === navLinks.length - 1
                    ? navButtonVariants
                    : linkVariants
                }
                className={`py-2 px-1 hover:bg-custom-primary/5 rounded flex justify-stretch ${
                  index === navLinks.length - 1 && "mt-auto"
                } ${
                  isActive(link.href) &&
                  "bg-custom-primary/25 text-custom-primary"
                }`}
              >
                <NavLink
                  href={link.href}
                  text={link.text}
                  isActive={false}
                  isButtonStyle={index !== navLinks.length - 1}
                />
              </motion.li>
            );
          })}
      </motion.ul>
    </motion.div>
  );
}
