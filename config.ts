import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://getit.marketing/our-perspective/",
  match: "https://getit.marketing/our-perspective/news/**",
  //selector: `.full-story-wrap`,
  maxPagesToCrawl: 50,
  outputFileName: "output.json",
};
