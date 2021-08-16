interface NavType {
  id: number;
  title: string;
  link: string;
}

export const NAV_DATA: NavType[] = [
  {
    id: 1,
    title: 'Shop',
    link: '/shop'
  },
  {
    id: 2,
    title: 'Authors',
    link: '/author'
  },
  {
    id: 3,
    title: 'Categories',
    link: '/category'
  },
  {
    id: 4,
    title: 'Contact',
    link: '/contact'
  }
];
