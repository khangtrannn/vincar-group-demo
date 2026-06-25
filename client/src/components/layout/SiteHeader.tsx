import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Menu, Search } from "lucide-react";
import NextLink from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";
import { VincarLogo } from "../brand/VincarLogo";

const navItems = [
  {
    label: "New Cars",
    href: "/new-cars",
  },
  {
    label: "Pre-Owned Cars",
    href: "/used-cars",
  },
  {
    label: "Leasing",
    href: "/leasing/explore",
  },
  {
    label: "COE Prices",
    href: "/coe/coe-price",
  },
];

export function SiteHeader() {
  const [isOnTop, setIsOnTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsOnTop(window.scrollY < 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      data-on-top={isOnTop}
      className={cn(
        "group/header fixed left-0 top-0 z-[1000] h-[var(--header-height-mobile)] w-screen shadow-md transition-all hover:backdrop-blur-none lg:h-[var(--header-height)]",
        "data-[on-top=false]/header:backdrop-blur",
      )}
    >
      <div className="absolute inset-0 z-0 bg-vc-bg-on transition-all group-data-[on-top=false]/header:opacity-75" />

      <NavigationMenu.Root
        className="relative z-10 flex h-full w-full flex-1 items-center justify-center [&>div:last-child]:z-[9] [&_[data-state=open]]:rounded-none"
        orientation="horizontal"
      >
        <div className="relative z-10 h-full w-full px-4 md:px-10">
          <div className="flex h-full items-center justify-between">
            <div className="flex flex-shrink-0 items-end gap-4">
              <NextLink
                href="/"
                aria-label="VINCAR Group home"
                className="[&_svg]:h-4 lg:[&_svg]:h-6"
              >
                <VincarLogo variant="dark" className="h-4 lg:h-6" />
              </NextLink>
            </div>

            <div className="relative max-lg:hidden">
              <NavigationMenu.List className="group flex flex-1 grow list-none items-center justify-center gap-8 space-x-1">
                {navItems.map((item) => (
                  <NavigationMenu.Item key={item.href}>
                    <NavigationMenu.Link asChild>
                      <NextLink
                        href={item.href}
                        className={cn(
                          "group flex h-[52px] w-max items-center justify-center rounded-none border-b-2 border-transparent bg-transparent p-4",
                          "text-body-2 font-vc-semibold transition-all",
                          "hover:bg-transparent hover:text-accent-foreground",
                          "focus:bg-accent focus:text-accent-foreground focus:outline-none",
                          "data-[state=open]:border-vc-btn-primary-gray-default data-[state=open]:bg-transparent data-[state=open]:text-accent-foreground",
                          "[&_svg]:hidden",
                        )}
                      >
                        {item.label}
                      </NextLink>
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                ))}
              </NavigationMenu.List>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <button
                type="button"
                aria-label="Search"
                className={cn(
                  "flex size-10 items-center justify-center gap-2 rounded-full border border-transparent bg-transparent",
                  "font-semibold text-vc-text-primary transition-all",
                  "hover:bg-elevation/10 disabled:cursor-not-allowed disabled:text-slate-200 disabled:opacity-100",
                  "[&_svg]:h-5 [&_svg]:w-auto",
                  "data-[state=open]:!rounded-full data-[state=open]:border-vc-stroke-input-focus",
                )}
              >
                <span className="shrink-0">
                  <Search aria-hidden="true" />
                </span>
              </button>

              <button
                type="button"
                aria-label="Open menu"
                className={cn(
                  "flex size-10 items-center justify-center gap-2 rounded-[12px] border border-transparent bg-transparent",
                  "font-semibold text-vc-text-primary transition-all lg:rounded-[24px]",
                  "hover:bg-elevation/10 disabled:cursor-not-allowed disabled:text-slate-200 disabled:opacity-100",
                  "[&_svg]:h-5 [&_svg]:w-auto",
                )}
              >
                <span className="shrink-0">
                  <Menu aria-hidden="true" />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute left-0 top-full flex justify-center" />
      </NavigationMenu.Root>
    </header>
  );
}