// Identity + navigation. Text values live in site-settings.json.
import settings from './site-settings.json';

export const site = {
  ...settings,
  url: 'https://rajvamsi12.github.io',
  github: 'https://github.com/rajvamsi12',
  linkedin: 'https://linkedin.com/in/rajvamsi-dasari9880',
  nav: [
    { label: 'Research', href: '/#research' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Publications', href: '/#publications' },
    { label: 'Writing', href: '/blog' },
  ],
  menu: [
    { label: 'Research', href: '/#research' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Publications', href: '/#publications' },
    { label: 'Writing', href: '/blog' },
    { label: 'Contact', href: '/#contact' },
  ],
  footer: [
    { title: 'Site', links: [['Research', '/#research'], ['Experience', '/#experience'], ['Publications', '/#publications'], ['Writing', '/blog']] },
    { title: 'Elsewhere', links: [['GitHub', 'https://github.com/rajvamsi12'], ['LinkedIn', 'https://linkedin.com/in/rajvamsi-dasari9880'], ['Email', 'mailto:dasarirajvamsi@gmail.com']] },
    { title: 'Code', links: [['agile-nicbf', 'https://github.com/rajvamsi12/agile-nicbf'], ['real2sim-trajectory-style-transfer', 'https://github.com/rajvamsi12/real2sim-trajectory-style-transfer']] },
    { title: 'Files', links: [['CV (PDF)', '/Raj_Vamsi_CV.pdf'], ['Research statement', '/blog/research-statement']] },
  ],
} as const;
