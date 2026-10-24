// Identity + navigation. Text values live in site-settings.json.
import settings from './site-settings.json';

type NavLink = { label: string; href: string; mobile?: boolean };

export const site = {
  ...settings,
  url: 'https://rajvamsi12.github.io',
  github: 'https://github.com/rajvamsi12',
  linkedin: 'https://linkedin.com/in/rajvamsi-dasari9880',
  nav: [
    { label: 'Research', href: '/#research' },
    { label: 'Projects', href: '/#projects', mobile: false },
    { label: 'Statement', href: '/blog/research-statement' },
  ] as NavLink[],
};
