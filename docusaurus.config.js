// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'APLICAÇÃO DE RECURSOS HUMANOS',
  tagline: 'A app de RH para o futuro',
  favicon: 'img/favicon.ico',


  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/APP_RH/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'stressz05', // Usually your GitHub org/user name.
  projectName: 'APP_RH', // Usually your repo name.
  deploymentBranch: 'gh-pages', // Nome do ramo a ser publicado
  trailingSlash: false, // recomendado para o Github Pages

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'RH APP',
        logo: {
          alt: 'Logo RH APP',
          src: 'img/rh.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Funcionalidades',
          },
          {
            to: '/docs/contactos',  // aqui vai o caminho para o markdown
            label: 'Contactos',
            position: 'left',
          },
          {
            to: '/docs/FAQ',
            label: 'FAQ',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Mais',
            items: [
              {
                label: 'Funcionalidades',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Comunidade',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/gabrielpedro06/ADC',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
              {
            title: 'Contactos',
            items: [
              {
                label: 'Gabriel Pedro',
                href: 'mailto:a88460@ualg.pt',
              },
              {
                label: 'Daniel Santos',
                href: 'mailto:a90135@ualg.pt',
              },
              {
                label: 'Afonso Almeida',
                href: 'mailto:a90145@ualg.pt',
              },
            ],
          },
    
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Afonso Almeida, Daniel Santos, Gabriel Pedro LESTI-ADC.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
