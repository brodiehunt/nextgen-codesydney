import PageHeader from "../components/shared/PageHeader";
import { fetchPortfoliosPageData } from "@/utils/sanityAPIFuncs";
import { PortableText } from "@portabletext/react";
import TechiesCards from "../techies4good/TechiesCards";
import CallToAction from "../components/shared/CTA/CallToAction";
import LinkButton from "../components/shared/LinkButton";
import PageChange from "../components/shared/PageChange";

export default async function Apps4Good() {
  const portfoliosPageData = await fetchPortfoliosPageData();
  const { pageHeader, portfolios } = portfoliosPageData;

  return (
    <>
      <PageChange />
      <PageHeader pageTitle={pageHeader?.pageTitle ? pageHeader.pageTitle : ""}>
        {pageHeader?.underTitleContent && (
          <PortableText value={pageHeader.underTitleContent} />
        )}
      </PageHeader>
      {portfolios && <TechiesCards techiesData={portfolios} />}
      <CallToAction title="Need some tech assistance from one of our Techies4Good?">
        <p className="text-center mb-8 max-w-[600px]">
          Techies4Good (T4G) is Code.Sydney&apos;s elite team. Its members are
          seasoned software and data engineers with proven commercial
          experience, published portfolios, invited and nominated by community
          leaders
        </p>
        <LinkButton to="/contact" variant="hollow" target="">
          Get Started Now
        </LinkButton>
      </CallToAction>
    </>
  );
}
