import { client } from "./sanity";

export const fetchHomepageData = async () => {
  const homeDataQuery = `
    *[_type == "homepage"]{
      hero {
        aboveTitle,
        title,
        moto,
        intro,
        internalLink {
          href,
          label
        },
        image {
          asset->{
            url
          },
          alt
        }
      },
      statisticsSection {
        mainTitle,
        pseudoTitle,
        cards[] {
          icons,
          number,
          text
        }
      },
      friendsSection {
        mainTitle,
        pseudoTitle,
        logoCarousel[] {
          asset->{
            url
          },
          alt
        }
      },
      projectsSection {
        mainTitle,
        pseudoTitle,
        belowTitleText,
        projects[] {
          organisation,
          projectType,
          projectDescription,
          projectSponserLinkUrl,
          projectImage
        }
      },
      testimonialsSection {
        mainTitle,
        pseudoTitle,
        testimonials[] {
          name,
          organisation,
          jobTitle,
          review,
        }
      },
      gallerySection {
        mainTitle, 
        pseudoTitle,
        galleryImages[] {
          asset->{
            url
          },
          alt,
          caption,
        }
      }
    }[0]
  `;

  const data = await client.fetch(homeDataQuery);
  return data;
};
