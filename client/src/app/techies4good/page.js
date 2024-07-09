import PageHeader from "../components/shared/PageHeader";
import { fetchTechiePageData } from "@/utils/sanityAPIFuncs";
import { PortableText } from "@portabletext/react";
import TechiesCards from "./TechiesCards";
import { v4 as uuidv4 } from "uuid";

export default async function Techies4Good() {
  const techiesPageData = await fetchTechiePageData();
  const { pageHeader, techies } = techiesPageData;
  const newTechies = [...techies, ...techies];
  const techiesWithIds = [...newTechies].map((techie, index) => {
    return {
      ...techie,
      id: uuidv4(),
    };
  });
  console.log(techiesWithIds);
  // console.log(techiesWithIds);
  return (
    <>
      <PageHeader pageTitle={pageHeader?.pageTitle ? pageHeader.pageTitle : ""}>
        {pageHeader?.underTitleContent && (
          <PortableText value={pageHeader.underTitleContent} />
        )}
      </PageHeader>
      {techies && <TechiesCards techiesData={techiesWithIds} />}
    </>
  );
}
