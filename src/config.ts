import type { Site, Ui, Features } from './types'

export const SITE: Site = {
  website: 'https://minimalfolio.vercel.app/',
  base: '/',
  title: 'Home',
  description:
    'An Aspiring ML Engineer/Data Scientist ',
  author: 'Sourish Chatterjee',
  lang: 'en',
  ogLocale: 'en_US',
}

export const UI: Ui = {
  internalNavs: [
    {
      path: '/blog',
      title: 'Blog',
      displayMode: 'textToIconOnMobile',
      text: 'Blog',
      icon: 'i-ri-article-line',
    },
    {
      path: '/projects',
      title: 'Projects',
      displayMode: 'textToIconOnMobile',
      text: 'Projects',
      icon: 'i-ri-lightbulb-line',
    },
    {
      path: '/changelog',
      title: 'Changelog',
      displayMode: 'alwaysIcon',
      icon: 'i-ri-draft-line',
    },
  ],
  socialLinks: [
    {
      link: 'https://github.com/sourize',
      title: 'Github',
      displayMode: 'alwaysIcon',
      icon: 'i-uil-github-alt',
    },
    {
      link: 'https://x.com/sourize_',
      title: `${SITE.author} on Twitter`,
      displayMode: 'iconHiddenOnMobile',
      icon: 'i-ri-twitter-x-fill',
    },
  ],
  navBarLayout: {
    left: [],
    right: [
      'internalNavs',
      'socialLinks',
      'searchButton',
      'themeButton',
      'rssLink',
    ],
  },
  tabbedLayoutTabs: [
    { title: 'Changelog', path: '/changelog' },
    { title: 'Blog', path: '/feeds' },
    //{ title: 'AstroStreams', path: '/streams' },
  ],
  maxGroupColumns: 3,
  showGroupItemColorOnHover: true,
}

/**
 * Configures whether to enable special features:
 *  - Set to `false` or `[false, {...}]` to disable the feature.
 *  - Set to `[true, {...}]` to enable and configure the feature.
 */
export const FEATURES: Features = {
  share: [
    true,
    {
      twitter: [true, '@sourize_'],
      mastodon: [false, '@ste7lin@fairy.id'],
      facebook: false,
      pinterest: false,
      reddit: false,
      telegram: false,
      whatsapp: false,
      email: false,
    },
  ],
  toc: [
    true,
    {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
      displayPosition: 'left',
      displayMode: 'hover',
    },
  ],
  ogImage: [
    true,
    {
      authorOrBrand: `${SITE.title}`,
      fallbackTitle: `${SITE.description}`,
      fallbackBgType: 'plum',
    },
  ],
}
