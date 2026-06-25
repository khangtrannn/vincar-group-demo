import Link from 'next/link'
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa6'

import { VincarLogo } from '@/components/brand/VincarLogo'
import { FooterGroup, footerGroups, FooterLink, socialLinks } from './site-footer.data'

const socialIconMap = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  TikTok: FaTiktok,
  YouTube: FaYoutube,
} as const

function FooterNavLink({ link }: { link: FooterLink }) {
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-white"
      >
        {link.label}
      </a>
    )
  }

  return (
    <Link href={link.href} className="transition-colors hover:text-white">
      {link.label}
    </Link>
  )
}

function FooterColumn({ group }: { group: FooterGroup }) {
  return (
    <div className="space-y-3">
      <h3 className="text-body-1 font-bold text-white">{group.title}</h3>

      <ul className="space-y-3">
        {group.links.map((link) => (
          <li key={`${group.title}-${link.label}`}>
            <FooterNavLink link={link} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function FooterSocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social) => {
        const Icon = socialIconMap[social.label]

        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-neutral-900 transition-opacity hover:opacity-80"
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </a>
        )
      })}
    </div>
  )
}

function FooterBrandBlock() {
  return (
    <div className="space-y-4">
      <Link href="/" className="inline-flex text-vc-bg-primary [&>svg]:h-5 lg:[&>svg]:h-6">
        <VincarLogo variant="light" />
      </Link>

      <p className="text-body-3 lg:max-w-[270px]">
        Singapore&apos;s Premier Multi-Brand Dealership and Parallel Importer
      </p>

      <p>
        Call us at{' '}
        <a
          href="tel:64731119"
          className="font-bold text-vc-bg-primary underline-offset-4 hover:underline"
        >
          64731119
        </a>
      </p>

      <FooterSocialLinks />
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-b from-dark to-neutral-800 px-4 py-10 !pb-0 text-body-3 text-disabled-secondary-bg lg:px-10 lg:py-20">
      <div className="mx-auto mb-12 max-w-[1440px] lg:mb-[96px]">
        <div className="flex flex-col items-start justify-center gap-10 lg:flex-row lg:gap-32">
          <FooterBrandBlock />

          <div className="grid flex-1 grid-cols-2 gap-10 lg:grid-cols-4">
            {footerGroups.map((group) => (
              <FooterColumn key={group.title} group={group} />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1400px] flex-col justify-center gap-3 px-5 py-4 pb-6 text-center lg:flex-row lg:gap-10">
        <span>© 2026 VINCAR. All Rights Reserved.</span>

        <div className="flex justify-center gap-10">
          <Link
            href="/terms-of-use"
            className="transition-colors hover:text-white"
          >
            Terms of Use
          </Link>

          <Link
            href="/privacy-policy"
            className="transition-colors hover:text-white"
          >
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  )
}