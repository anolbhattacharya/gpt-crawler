import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://blog.equinix.com/blog/2023/",
  match: "https://blog.equinix.com/blog/2023/**",
  //selector: `.full-story-wrap`,
  maxPagesToCrawl: 100,
  outputFileName: "output.json",
};
