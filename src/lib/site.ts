const BASE = import.meta.env.BASE_URL.replace(/\/?$/, '/');
/** Interner Link relativ zur Basis-URL, z. B. u('kontakt/') */
export const u = (path = '') => BASE + path.replace(/^\//, '');
export const PORTFOLIO_URL = 'https://www.alextiffert.com/portfolio';
export const MAIL = 'kontakt@dr-tiffert.de';
export const PHONE_DISPLAY = '0172 7235888';
export const PHONE_HREF = 'tel:+491727235888';
export const NAV = [
  { href: 'organisationsentwicklung/', label: 'Organisationsentwicklung' },
  { href: 'supervision/', label: 'Supervision' },
  { href: 'fotografie/', label: 'Künstlerische Fotografie' },
  { href: 'lehre/', label: 'Lehre' },
  { href: 'publikationen/', label: 'Publikationen' },
];
