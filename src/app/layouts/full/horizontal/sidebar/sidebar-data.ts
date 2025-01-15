import { NavItem } from '../../vertical/sidebar/nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Configuración',
  },
  {
    displayName: 'Usuarios',
    iconName: 'user',
    route: '/dashboard/admin/user'
  },
  {
    displayName: 'Productos',
    iconName: 'box',
    route: '/dashboard/admin/product',
  },
  {
    displayName: 'Clientes',
    iconName: 'users',
    route: '/dashboard/admin/client',
  },
  {
    displayName: 'Facturas',
    iconName: 'folder',
    route: '/dashboard/admin/billing',
  }
];
