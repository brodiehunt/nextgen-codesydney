import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function TechieCard({
  techieData,
  index,
  uniqueKey,
  direction,
}) {
  const { name, description, linkedinUrl, image, id } = techieData;
  const isActive = index === 1 ? true : false;
  return (
    <motion.article
      className={`p-4 rounded mb-8 lg:mb-0 lg:mr-12 bg-custom-primary/5 lg:inline-block lg:max-w-[900px] lg:relative lg:translate-x-[100px]
        ${index === 0 ? "opacity-0" : ""} ${index === 5 ? "opacity-0" : ""}`}
      // key={id}
      layout
      // initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
      // animate={{ opacity: 1, x: 0 }}
      // exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`md:grid md:gap-4 md:grid-cols-2 transition-[grid-template-columns] duration-500 ease-in-out ${
          isActive ? "lg:grid-cols-2" : "lg:grid-cols-1"
        }`}
      >
        <div className="mb-4 md:mb-0">
          <img src={image.asset.url} className="md:max-w-[400px] md:w-full" />
        </div>
        <div
          className={`whitespace-normal md:flex md:flex-col md:justify-center transition-all duration-500 ease-in-out ${
            isActive ? "lg:flex opacity-100" : "lg:hidden opacity-0"
          }`}
        >
          <h2 className="font-semibold text-custom-primary text-2xl mb-2 md:text-4xl">
            {name}
          </h2>
          <p className="text-custom-light/80 mb-2 md:mb-4 text-sm">
            {description}
          </p>
          <div>
            <a
              className="px-4 py-2 bg-gradient-to-b from-[#2892F9] to-[#1D73C6] hover:from-[#4DAEF9] hover:to-[#3C89C9] rounded shadow-md hover:shadow-inset transition-all duration-300 text-white flex items-center gap-2 w-fit"
              href={linkedinUrl}
              target="_blank"
            >
              Visit Linkedin <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
