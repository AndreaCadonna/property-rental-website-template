import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    // {
    //   text: 'Pages',
    //   links: [

    //     {
    //       text: 'Contact',
    //       href: getPermalink('/contact'),
    //     },
    //     {
    //       text: 'Terms',
    //       href: getPermalink('/terms'),
    //     },
    //     {
    //       text: 'Privacy policy',
    //       href: getPermalink('/privacy'),
    //     },
    //   ],
    // }
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Link utili',
      links: [
        { text: 'Home', href: '#' },
        { text: 'Chi siamo', href: '#about' },
        { text: 'Appartamenti', href: '#bilocale' },
        { text: 'I nostri comfort', href: '#comfort' },
        { text: 'Testimonianze', href: '#testimonianze' },
      ],
    }
  ],
  secondaryLinks: [
    { text: 'Cookies', href: getPermalink('/cookies') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'casanegrano@gmail.com', href: 'mailto:casanegrano@gmail.com' },
  ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
      Codici CIN: IT022205C2A7J22SB7 | IT022205C269BP38G3 | IT022205C2I72MMQXZ
      <br />
      &copy; 2025 Casa Negrano. Tutti i diritti riservati.
    
  `,
};
