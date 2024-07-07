import Image from "next/image";
import { fetchHomepageData } from "@/utils/sanityAPIFuncs";
import Hero from "./components/Home/Hero";
import StatisticsSection from "./components/Home/StatisticsSection";
export default async function Home() {
  const homePageData = await fetchHomepageData();
  const { hero, statisticsSection } = homePageData;
  console.log(statisticsSection);
  return (
    <div className="">
      <Hero hero={hero} />
      <StatisticsSection statisticsData={statisticsSection} />
    </div>
  );
}
