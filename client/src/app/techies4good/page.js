import PageHeader from "../components/shared/PageHeader";
import { fetchTechiePageData } from "@/utils/sanityAPIFuncs";
import { PortableText } from "@portabletext/react";
import TechiesCards from "./TechiesCards";
import { v4 as uuidv4 } from "uuid";
import CallToAction from "../components/shared/CTA/CallToAction";
import LinkButton from "../components/shared/LinkButton";
import PageChange from "../components/shared/PageChange";

export default async function Techies4Good() {
  const techiesPageData = await fetchTechiePageData();
  const { pageHeader, techies } = techiesPageData;

  return (
    <>
      <PageChange />
      <PageHeader pageTitle={pageHeader?.pageTitle ? pageHeader.pageTitle : ""}>
        {pageHeader?.underTitleContent && (
          <PortableText value={pageHeader.underTitleContent} />
        )}
      </PageHeader>
      {techies && <TechiesCards techiesData={techies} />}
      <CallToAction title="Ready to Transform Your Mission into a Digital Success?">
        <p className="text-center mb-8 max-w-[600px] font-light">
          We provide software development, integration and data consultancy
          tailored for non-profits, charities, and organizations of all sizes.
          Our commitment is to amplify your mission and ensure your success.
        </p>
        <LinkButton to="/contact" variant="hollow" target="">
          Get Started Now
        </LinkButton>
      </CallToAction>
    </>
  );
}
