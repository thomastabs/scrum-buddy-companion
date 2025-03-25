
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Sprint, ListTodo, Users, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const navigationItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Sprints', path: '/sprints', icon: Sprint },
  { name: 'Backlog', path: '/backlog', icon: ListTodo },
  { name: 'Team', path: '/team', icon: Users },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const isMobile = useIsMobile();
  
  return (
    <>
      {/* Mobile backdrop */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={toggleSidebar}
        ></div>
      )}
      
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 bg-card border-r border-border transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          "lg:z-10 lg:mt-16 lg:pt-4"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="px-4 py-4 flex justify-between items-center lg:hidden">
            <h2 className="text-xl font-semibold">Scrum Manager</h2>
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <nav className="px-2 flex-1 overflow-auto">
            <ul className="space-y-1">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => cn(
                      "flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors",
                      isActive 
                        ? "bg-primary text-primary-foreground" 
                        : "hover:bg-muted"
                    )}
                    onClick={isMobile ? toggleSidebar : undefined}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="p-4 border-t border-border">
            <div className="text-xs text-muted-foreground">
              <p>Current Sprint: Sprint 12</p>
              <p className="mt-1">Days Remaining: 8</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
