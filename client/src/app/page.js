import Image from "next/image";
import { fetchHomepageData } from "@/utils/sanityAPIFuncs";
import Hero from "./components/Home/Hero";
import StatisticsSection from "./components/Home/StatisticsSection";
import ProjectsSection from "./components/Home/ProjectsSection";
import FriendsSection from "./components/Home/FriendsSection";
import TestimonialsSection from "./components/Home/TestimonialsSection";
import GallerySection from "./components/Home/GallerySection";
export default async function Home() {
  const homePageData = await fetchHomepageData();
  const {
    hero,
    statisticsSection,
    projectsSection,
    friendsSection,
    testimonialsSection,
    gallerySection,
  } = homePageData;

  return (
    <div className="">
      <Hero hero={hero} />
      <StatisticsSection statisticsData={statisticsSection} />
      <FriendsSection friendsData={friendsSection} />
      <ProjectsSection projectsData={projectsSection} />
      <TestimonialsSection testimonialsData={testimonialsSection} />
      <GallerySection galleryData={gallerySection} />
    </div>
  );
}
