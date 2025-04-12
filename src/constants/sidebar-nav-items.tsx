import { File, Grid2x2, Search, Settings } from 'lucide-react';

export const sidebarNavItems = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: <Grid2x2 />,
  },
  {
    title: 'Search Scores',
    url: '/search-scores',
    icon: <Search />,
  },
  {
    title: 'Reports',
    url: '/reports',
    icon: <File />,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: <Settings />,
  },
];
