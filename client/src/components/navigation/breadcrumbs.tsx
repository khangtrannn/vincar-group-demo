import { ChevronRight, House } from 'lucide-react'
import Link from 'next/link'

type BreadcrumbItem = {
  label: string
  href?: string
}

type BreadcrumbProps = {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex flex-nowrap items-center gap-2 break-words text-sm text-vc-text-secondary sm:gap-2.5">
        <li className="inline-block min-w-0 truncate whitespace-nowrap p-1">
          <Link
            href="/"
            aria-label="Home"
            className="font-normal text-sm text-vc-text-secondary transition-colors hover:text-vc-text-primary"
          >
            <House className="h-5 w-5" aria-hidden="true" />
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li
              key={`${item.label}-${index}`}
              className="contents"
            >
              <span
                role="presentation"
                aria-hidden="true"
                className="text-vc-text-secondary transition-colors hover:text-vc-text-primary [&>svg]:h-4 [&>svg]:w-4"
              >
                <ChevronRight aria-hidden="true" />
              </span>

              <span className="inline-block min-w-0 truncate whitespace-nowrap p-1">
                {isLast || !item.href ? (
                  <span
                    role="link"
                    aria-disabled="true"
                    aria-current="page"
                    className="text-sm font-vc-semibold text-vc-text-primary"
                  >
                    <span>{item.label}</span>
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-normal text-vc-text-secondary transition-colors hover:text-vc-text-primary"
                  >
                    {item.label}
                  </Link>
                )}
              </span>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}