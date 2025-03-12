import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nirmitsaini.10xdevs.in/",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://nirmitsaini.10xdevs.in/blog",
      lastModified: new Date().toISOString(),
    },
  ];
}
