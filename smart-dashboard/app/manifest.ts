import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Smart Dashboard",
    short_name: "Dashboard",
    description: "Intelligent analytics dashboard starter built with Next.js",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#2563EB",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "64x64",
        type: "image/svg+xml"
      }
    ]
  };
}
