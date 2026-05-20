import type { MetadataRoute } from "next";
import { physicians } from "@/data/physicians";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { blogPosts } from "@/data/blog";

const BASE_URL = "https://vireocardiology.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/physicians",
    "/advanced-practice-professionals",
    "/testimonials",
    "/services",
    "/conditions",
    "/locations",
    "/patient-resources",
    "/telemedicine",
    "/blog",
    "/contact",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const dynamicRoutes = [
    ...physicians.map((p) => `/physicians/${p.slug}`),
    ...services.map((s) => `/services/${s.slug}`),
    ...locations.map((l) => `/locations/${l.slug}`),
    ...blogPosts.map((b) => `/blog/${b.slug}`),
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
