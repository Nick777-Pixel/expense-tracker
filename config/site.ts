export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:"Beautifully designed components built with Radix UI and Tailwind CSS.",
  links: {
    twitter: "https://twitter.com/hlmkun",
    github: "https://github.com/halimkun",
    docs: "https://halimkun.com",
  },
  mainNav: [
    {
      title: "Home",
      alias: "H",
      href: "/",
    },
    {
      title: "Transactions",
      alias: "T",
      href: "/transactions",
    },
    {
      title: "Accounts",
      alias: "A",
      href: "/accounts",
    },
    {
      title: "Reports",
      alias: "R",
      href: "/reports",
    },
    {
      title: "Budget",
      alias: "B",
      href: "/budget",
    },
    {
      title: "Settings",
      alias: "S",
      href: "/settings",
    },
    {
      title: "About",
      alias: "A",
      href: "/about",
    },
  ],
}
