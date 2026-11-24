const BASE = import.meta.env.BASE_URL.replace(/\/?$/, '/');
/** Interner Link relativ zur Basis-URL, z. B. u('kontakt/') */
export const u = (path = '') => BASE + path.replace(/^\//, '');
export const MAIL = 'kontakt@dr-tiffert.de';
export const NAV = [
  { href: 'executive-coaching/', label: 'Executive Coaching' },
  { href: 'nachfolge/', label: 'Nachfolge' },
  { href: 'supervision/', label: 'Supervision' },
  { href: 'fotografie/', label: 'Künstlerische Fotografie' },
  { href: 'lehre/', label: 'Lehre' },
  { href: 'publikationen/', label: 'Publikationen' },
];
