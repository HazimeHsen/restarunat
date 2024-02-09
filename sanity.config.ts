import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./src/app/sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

const config = defineConfig({
  projectId: projectId,
  dataset: "production",
  title: "Coffe Shop",
  apiVersion: "2023-11-06",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});
export default config;
