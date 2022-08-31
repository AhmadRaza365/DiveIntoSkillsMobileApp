import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
import sanityProjectId from "./envVariable.js";

const client = sanityClient({
  projectId: sanityProjectId,
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
