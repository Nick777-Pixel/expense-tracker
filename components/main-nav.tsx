import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { NavItem } from "@/types/nav"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
      </Link>
      {items?.length ? (
        <nav className="flex flex-col gap-5">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  title={item.title}
                  className={cn(
                    "flex items-center justify-center text-sm md:text-lg font-medium text-muted-foreground px-5 py-1 rounded-lg",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.alias}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
