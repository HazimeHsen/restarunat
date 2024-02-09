import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./src/app/sanity/schemas";

const config = defineConfig({
  projectId: "3y3b9hef",
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
