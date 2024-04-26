export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'About us',
      links: [
        {
          text: 'What we do',
          href: '/about/what-we-do',
        },
        {
          text: 'Meet our team',
          href: '/about/meet-our-team',
        },
        {
          text: 'Our partners',
          href: '/about/our-partners',
        },
        {
          text: 'Our donors',
          href: '/about/our-donors',
        },
      ],
    },
    {
      text: 'News & insights',
      href: '/news-and-insights',
    },
    {
      text: 'Our work',
      links: [
        {
          text: 'Mauritius fruit bat conservation',
          href: '/projects/mauritius-fruit-bat-conservation',
        },
        {
          text: 'Insectivorous bat conservation',
          href: '/projects/insectivorous-bat-conservation',
        },
        {
          text: 'Forest restoration',
          href: '/projects/forest-restoration',
        },
        {
          text: 'Educational community outreach',
          href: '/projects/educational-community-outreach',
        },
      ],
    },
    {
      text: 'Biodiversity',
      href: '/biodiversity',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'About us',
      links: [
        {
          text: 'What we do',
          href: '/about/what-we-do',
        },
        {
          text: 'Our team',
          href: '/about/meet-our-team',
        },
        {
          text: 'Partners',
          href: '/about/partners',
        },
        {
          text: 'Donors',
          href: '/about/donors',
        },
      ],
    },
    {
      title: 'Our projects',
      links: [
        {
          text: 'Mauritius fruit bats',
          href: '/projects/mauritius-fruit-bat-conservation',
        },
        {
          text: 'Insectivorous bats',
          href: '/projects/insectivorous-bat-conservation',
        },
        {
          text: 'Forest restoration',
          href: '/projects/forest-restoration',
        },
        {
          text: 'Community outreach',
          href: '/projects/educational-community-outreach',
        },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/ERAindianocean' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/eraindianocean?lang=en' },
  ],
  footNote: `
    ERA Indian Ocean &copy; 2016 &ndash; ${new Date().getFullYear()} · All rights reserved.
  `,
};
