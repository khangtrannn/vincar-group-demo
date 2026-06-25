import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { cn } from '@/lib/cn'

type BackLinkProps = {
  href: string
  label: string
  className?: string
}

export function BackLink({ href, label, className }: BackLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex h-10 items-center justify-center gap-2 rounded-[24px]',
        'bg-transparent px-0 py-2 font-semibold text-vc-text-primary',
        'transition-all hover:bg-elevation/10 hover:underline hover:underline-offset-8',
        'max-lg:text-body-3 lg:text-body-3',
        '[&_svg]:h-4 [&_svg]:w-auto',
        className,
      )}
    >
      <span className="shrink-0">
        <ArrowLeft aria-hidden="true" strokeWidth={2} />
      </span>

      {label}
    </Link>
  )
}