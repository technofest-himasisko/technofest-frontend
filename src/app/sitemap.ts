import config from "@/config";
import { isComingSoon } from "@/lib/utils/common";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  if (isComingSoon()) {
    return [
      {
        url: config.baseUrl,
        lastModified: new Date(),
      },
    ];
  }

  return [
    {
      url: config.baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${config.baseUrl}/login`,
      lastModified: new Date(),
    },
    {
      url: `${config.baseUrl}/register`,
      lastModified: new Date(),
    },
    {
      url: `${config.baseUrl}/login`,
      lastModified: new Date(),
    },
    {
      url: `${config.baseUrl}/register`,
      lastModified: new Date(),
    },
    {
      url: `${config.baseUrl}/faqs`,
      lastModified: new Date(),
    },
  ];
}
