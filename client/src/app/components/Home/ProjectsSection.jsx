import SectionTitle from "../shared/SectionTitle";
import Projects from "./Projects";

export default function ProjectsSection({ projectsData }) {
  const { mainTitle, psuedoTitle, belowTitleText, projects } = projectsData;
  return (
    <section className="relative z-20 w-full mx-auto px-4 py-12 md:px-6 md:py-10 lg:px-10 lg:py-16">
      <SectionTitle psuedoTitle={psuedoTitle}>
        <span className="text-custom-primary">
          {mainTitle ? mainTitle : ""}
        </span>
      </SectionTitle>
      {belowTitleText && (
        <p className="mt-8 text-center mx-auto max-w-[1000px]">
          Code.Sydney is a volunteering organisation that supports beginner
          developers transition to gain paid employment while helping non-profit
          and charity organisations with their app needs. Below are some of our
          projects.
        </p>
      )}

      <Projects projectsData={projects} />
    </section>
  );
}
