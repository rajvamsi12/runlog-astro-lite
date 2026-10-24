// Identity + navigation. Text values live in site-settings.json.
import settings from './site-settings.json';

export const site = {
  ...settings,
  url: 'https://rajvamsi12.github.io',
  github: 'https://github.com/rajvamsi12',
  linkedin: 'https://linkedin.com/in/rajvamsi-dasari9880',
  nav: [
    { label: 'Research', href: '/#research' },
    { label: 'Writing', href: '/blog' },
    { label: 'CV', href: '/Raj_Vamsi_CV.pdf' },
  ],
} as const;
