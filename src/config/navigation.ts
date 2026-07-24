export interface NavigationItem {
  title: string;
  path: string;
}

export const navigation: NavigationItem[] = [
  {
    title: 'Dashboard',
    path: '/',
  },
  {
    title: 'Weight',
    path: '/weight',
  },
  {
    title: 'Sleep',
    path: '/sleep',
  },
]
