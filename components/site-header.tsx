import Link from "next/link"

import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky z-40 min-h-screen w-14 md:w-20 border-r">
      <div className="flex h-full flex-col justify-between p-3">
        <MainNav items={siteConfig.mainNav} />

        <div className="flex flex-col items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
