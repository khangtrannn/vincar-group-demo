export type FooterLink = {
  label: string
  href: string
  external?: boolean
}

export type FooterGroup = {
  title: string
  links: FooterLink[]
}

export const footerGroups: FooterGroup[] = [
  {
    title: 'Services',
    links: [
      { label: 'New Cars', href: '/new-cars' },
      { label: 'Pre-Owned Cars', href: '/used-cars' },
      { label: 'Leasing & Rental', href: '/leasing' },
      { label: 'Insurance', href: '/insurance' },
      { label: 'Financing', href: '/financing' },
    ],
  },
  {
    title: 'Our Showrooms',
    links: [
      {
        label: 'GAC Leng Kee',
        href: 'https://maps.app.goo.gl/ZWkquQfkEa7XULJ88',
        external: true,
      },
      {
        label: 'GAC Punggol',
        href: 'https://maps.app.goo.gl/mmpiHF2Na3DsmkHW7',
        external: true,
      },
      {
        label: 'GAC PLQ',
        href: 'https://maps.app.goo.gl/tSKm1mEF2ZNhRuuZ7',
        external: true,
      },
      {
        label: 'AION Singapore',
        href: 'https://maps.app.goo.gl/56Usc3Zy43UWtPnC6',
        external: true,
      },
      {
        label: 'Proton e.MAS Singapore',
        href: 'https://maps.app.goo.gl/BDGZqWAiFh7VDWvt7',
        external: true,
      },
      {
        label: 'VINCAR Pre-Owned',
        href: 'https://goo.gl/maps/BmgVbUzcknUs7AWp9',
        external: true,
      },
    ],
  },
  {
    title: 'About Us',
    links: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Frequently Asked Questions', href: '/#' },
      { label: 'COE Prices', href: '/coe/coe-price' },
      { label: 'News', href: '/blog' },
    ],
  },
]

export const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/vincargroup',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/vincar.sg/',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@vincar',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UCH5DDUR3Vc41_-7WItXcPTQ',
  },
] as const