import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: "Learn Python",
  tagline: "Python Made Easy By ComputeNepal",
  favicon: "img/ComputeNepal-logo.jpg",

  // Set the production url of your site here
  url: "https://computenepal.com/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "computenepal", // Usually your GitHub org/user name.
  projectName: "learn-python", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/computenepal/learn-html/tree/master",
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    metadata: [{
      name: 'keywords', content: 'python, learn python, tutorial, python tutorial, learn to code'
    }],
    navbar: {
      title: "Learn Python",
      logo: {
        alt: "ComputeNepal Logo",
        src: "img/ComputeNepal-logo.jpg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Learn",
        },
        { href: "https://computenepal.com", label: "Blog", position: "left" },
        {
          href: "https://github.com/computenepal/learn-html",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Facebook Group",
              href: "https://www.facebook.com/groups/computenepal",
            },
            {
              label: "Youtube@ComputeNepal",
              href: "https://youtube.com/@computenepal",
            },
            {
              label: "Youtube@ramCoder",
              href: "https://youtube.com/@ramcoder",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/computenepal",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "ComputeNepal",
              href: "https://www.computenepal",
            },
            {
              label: "GitHub",
              href: "https://github.com/computenepal/learn-html",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ComputeNepal. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
