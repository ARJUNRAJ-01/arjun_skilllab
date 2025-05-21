
import { LayoutDashboard, Package, ShoppingCart, FileText } from 'lucide-react';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar';
import { Link, useLocation } from 'react-router-dom';

const NavItems = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    href: '/'
  },
  {
    title: 'Products',
    icon: Package,
    href: '/products'
  },
  {
    title: 'Cart',
    icon: ShoppingCart,
    href: '/cart'
  },
  {
    title: 'Orders',
    icon: FileText,
    href: '/orders'
  }
];

const AppSidebar = () => {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <div className="flex items-center px-4 py-5">
          <Link to="/" className="flex items-center">
            <h1 className="text-xl font-bold text-primary">NexusCart</h1>
            <span className="ml-2 text-sm font-medium text-muted-foreground">Guardian</span>
          </Link>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <Link 
                      to={item.href}
                      className={location.pathname === item.href ? 'bg-sidebar-accent' : ''}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
