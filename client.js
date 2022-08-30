import sanityClient from "@sanity/client";
import sanityProjectId from "./envVariable.js";

export default sanityClient({
  projectId: sanityProjectId,
  dataset: "production",
  apiVersion: '2021-10-21',
  useCdn: true,
});