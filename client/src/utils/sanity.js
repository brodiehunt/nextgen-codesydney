import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "8zqunlka", // replace with your actual project ID
  dataset: "codesydneywebsite", // replace with your dataset name
  apiVersion: "2024-07-01", // use current date (YYYY-MM-DD) to ensure the latest version
  useCdn: true, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
