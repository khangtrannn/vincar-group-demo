import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { cn } from "@/lib/cn";

type VehicleCategoryKey = "new-cars" | "used-cars" | "leasing";

type VehicleCategoryNavProps = {
  activeKey?: VehicleCategoryKey;
};

const categoryItems: Array<{
  key: VehicleCategoryKey;
  label: string;
  href: string;
  imageUrl: string;
}> = [
  {
    key: "new-cars",
    label: "New Cars",
    href: "/new-cars",
    imageUrl:
      "https://storage.googleapis.com/vincar-web-assets/v2.1/images/new-cars/nav-new-cars.png",
  },
  {
    key: "used-cars",
    label: "Pre-Owned Cars",
    href: "/used-cars",
    imageUrl:
      "https://storage.googleapis.com/vincar-web-assets/v2.1/images/new-cars/nav-pre-owned-cars.png",
  },
  {
    key: "leasing",
    label: "Rental & Leasing",
    href: "/leasing/explore",
    imageUrl:
      "https://storage.googleapis.com/vincar-web-assets/v2.1/images/new-cars/nav-rental-leasing.png",
  },
];

function getActiveKeyFromPath(pathname: string): VehicleCategoryKey {
  if (pathname.startsWith("/used-cars")) {
    return "used-cars";
  }

  if (pathname.startsWith("/leasing")) {
    return "leasing";
  }

  return "new-cars";
}

export function VehicleCategoryNav({ activeKey }: VehicleCategoryNavProps) {
  const router = useRouter();
  const currentActiveKey = activeKey ?? getActiveKeyFromPath(router.asPath);

  return (
    <section className="h-[100px] p-2 lg:h-[200px] lg:p-4">
      <div className="flex h-full self-stretch overflow-hidden rounded-[20px] shadow-lg">
        {categoryItems.map((item) => {
          const isActive = item.key === currentActiveKey;

          return (
            <Link
              key={item.key}
              href={item.href}
              data-active={isActive}
              style={{ width: "calc(33.3333%)" }}
              className={cn(
                "relative flex flex-col items-stretch justify-end gap-2 !pr-2 px-4 transition-all lg:px-10",
                "hover:lg:!w-[40%] hover:not-[data-active=true]:shrink-0",
                isActive && "lg:!w-[40%]",
              )}
            >
              <div className="relative z-[2] text-white">
                <h1 className="text-heading-5 flex w-full items-center py-4 font-vc-semibold transition-all">
                  {item.label}
                </h1>
              </div>

              <div
                className={cn(
                  "absolute inset-0 z-[1] transition-all",
                  isActive &&
                    "bg-gradient-to-r from-[#0F172A80] to-transparent backdrop-blur-[1px]",
                )}
              />

              <div className="absolute inset-0 z-[0] bg-gray-500">
                <Image
                  src={item.imageUrl}
                  alt=""
                  fill
                  sizes="100vw"
                  className={cn(
                    "object-cover transition-all",
                    isActive
                      ? "grayscale-0 opacity-100"
                      : "grayscale opacity-80",
                  )}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
