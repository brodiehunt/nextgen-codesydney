import Image from "next/image";
import { urlFor } from "@/utils/sanity";

const indexOne =
  "xl:translate-x-[-100%] xl:scale-150 xl:blur-lg xl:opacity-0 xl:pointer-events-none";
const indexTwo =
  "xl:opacity-1 xl:translate-x-[0%] xl:scale-100 xl:translate-y-[0%] xl:blur-none xl:z-30";
const indexThree =
  "xl:translate-x-[50%] xl:translate-y-[10%] xl:scale-80 xl:z-20 xl:blur-lg xl:opacity-1 xl:pointer-events-none";
const indexFour =
  "xl:translate-x-[90%] xl:translate-y-[20%] xl:scale-40 xl:blur-xl xl:z-10 xl:opacity-1 xl:pointer-events-none";

const indexFive =
  "xl:translate-x-[120%] xl:translate-y-[30%] xl:scale-30 xl:blur-xl xl:z-0 xl:opacity-0 xl:pointer-events-none";

const styleArray = [indexOne, indexTwo, indexThree, indexFour, indexFive];

export default function ProjectCard({ projectInfo, index }) {
  const {
    organisation,
    projectType,
    projectDescription,
    projectImage,
    projectSponserLinkUrl,
  } = projectInfo;

  return (
    <article
      className={`py-8 lg:grid lg:grid-cols-2 xl:absolute xl:h-[100%] xl:top-0 xl:left-0 xl:w-[70%] transition-all duration-[0.7s] xl:pb-0 ${
        index < 5 ? styleArray[index] : styleArray[4]
      }`}
    >
      <div className={`mb-4 lg:order-2`}>
        <img src={urlFor(projectImage).url()} alt={projectImage.alt} />
      </div>
      <div
        className={`mb-8 lg:order-1 lg:max-w-[90%] self-center 
                  ${index === 1 ? "xl:opacity-1" : "xl:opacity-0"}`}
      >
        <span
          className={`block text-custom-primary uppercase font-bold xl:opacity-0 ${
            index === 1 ? "animate-showProjectContentOrganisation" : ""
          }`}
        >
          {organisation ? organisation : ""}
        </span>
        <h3
          className={`text-xl md:text-2xl font-semibold mb-2 xl:opacity-0
                  ${index === 1 ? "animate-showProjectContentTitle" : ""}`}
        >
          {projectType ? projectType : ""}
        </h3>
        <p
          className={`mb-4 xl:opacity-0 ${
            index === 1 ? "animate-showProjectContentDescription" : ""
          }`}
        >
          {projectDescription ? projectDescription : ""}
        </p>
        <a
          className={`lg:block px-4 py-2 bg-gradient-to-b from-[#2892F9] to-[#1D73C6] hover:from-[#4DAEF9] hover:to-[#3C89C9] rounded shadow-md hover:shadow-inset transition-all duration-300 text-white self-start xl:opacity-0 w-fit ${
            index === 1 ? "animate-showProjectContentButton" : ""
          }`}
          href={projectSponserLinkUrl ? projectSponserLinkUrl : "/"}
          target="_blank"
        >
          Link to Project Sponser
        </a>
      </div>
    </article>
  );
}
