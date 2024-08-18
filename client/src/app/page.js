import Image from "next/image";
import { fetchHomepageData } from "@/utils/sanityAPIFuncs";
import Hero from "./components/Home/Hero";
import StatisticsSection from "./components/Home/StatisticsSection";
import ProjectsSection from "./components/Home/ProjectsSection";
import FriendsSection from "./components/Home/FriendsSection";
import TestimonialsSection from "./components/Home/TestimonialsSection";
import GallerySection from "./components/Home/GallerySection";
import CallToAction from "./components/shared/CTA/CallToAction";
import LinkButton from "./components/shared/LinkButton";
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
      <CallToAction title="Ready to Transform Your Mission into a Digital Success?">
        <p className="text-center mb-8 max-w-[600px]">
          At Code.Sydney, we specialise in creating impactful, professional
          websites and digital tools tailored specifically for non-profits and
          charities. Our volunteer team is dedicated to helping you amplify your
          mission online, making it easier for you to connect with your audience
          and achieve your goals.
        </p>
        <LinkButton to="/contact" variant="hollow" target="">
          Get Started Now
        </LinkButton>
      </CallToAction>
    </div>
  );
}
