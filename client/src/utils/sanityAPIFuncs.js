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
      }
    }[0]
  `;

  const data = await client.fetch(homeDataQuery);
  return data;
};
