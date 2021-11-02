module.exports = {
  theme: "cosmos",
  title: "Aldabra Finance Documentation",
  plugins: ["vuepress-plugin-element-tabs"],
  locales: {
    "/": {
      lang: "en-US",
    },
  },
  plugins: [
    "@maginapp/vuepress-plugin-katex",
    {
      delimiters: "dollars",
    },
  ],
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-icon.png' }]
  ],
  base: process.env.VUEPRESS_BASE || "/",
  themeConfig: {
    repo: "aldabraFinance",
    docsRepo: "aldabraFinance/aldabra-docs",
    docsDir: "docs",
    editLinks: true,
    // docs 1.0.168: custom true hides subpages searchbar
    // docs 1.0.168: custom true hides hub, ibc, core sidebar footer logos
    nextLinks: false,
    prevLinks: false,
    custom: true,
    logo: {
      src: "/assets/img/logo.svg",
    },
    topbar: {
      banner: false,
    },
    sidebar: {
      auto: false,
      nav: [
        {
          title: "Getting Started",
          children: [
            {
              title: "Overview",
              path: "/",
            },
            {
              title: "Introduction",
              path: "/getting-started/introduction/",
            },
            {
              title: "Roadmap",
              path: "/getting-started/roadmap/",
            },
          ]
        },
        {
          title: "Our Protocols",
          children: [
            {
              title: "Stable Pool",
              path: "/our-protocols/pool/",
            },
            {
              title: "Constant Swap",
              path: "/our-protocols/swap/",
            },
            {
              title: "Yield Earning",
              path: "/our-protocols/yield-earning/",
            },
          ]
        },
        {
          title: "Tokens",
          children: [
            {
              title: "STAL Stablecoin",
              path: "/tokens/stal-stablecoin/",
            },
            {
              title: "ALDABRA Token",
              path: "/tokens/aldabra-token/",
            },
          ]
        },
        {
          title: "Governance",
          children: [
            {
              title: "Lock & Vote",
              path: "/governance/lock-and-vote/",
            },
          ]
        },
        {
          title: "Transparency",
          children: [
            {
              title: "Relevant Addresses",
              path: "/transparency/relevant-addresses/",
            },
          ]
        },
      ],
    },
  },
}
