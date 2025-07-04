import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type * as Redocusaurus from "redocusaurus";

const config: Config = {
  title: "Flickz Docs",
  tagline: "API Documentation",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://valenceworks.github.io/", // ✅ trailing slash
  baseUrl: "/flickz-docs/",               // ✅ trailing slash

  trailingSlash: true,                    // ✅ ensures consistent URLs for GitHub Pages

  organizationName: "ValenceWorks",       // ✅ GitHub org
  projectName: "flickz-docs",             // ✅ GitHub repo


  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
    [
      "redocusaurus",
      {
        specs: [
          {
            spec: "static/openapi-bundle.yaml",
            id: "flickz-api",
            route: "/api/flickz",
          },
        ],
        theme: {
          primaryColor: "#1890ff",
        },
      },
    ] satisfies Redocusaurus.PresetEntry,
  ],

  themeConfig: {
    navbar: {
      title: "Flickz",
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/api/flickz", label: "API", position: "left" },
        {
          href: "https://github.com/your-org/flickz",
          label: "GitHub",
          position: "right",
        },
      ],
    },
  },
};

export default config;
