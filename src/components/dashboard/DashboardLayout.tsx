import React, { useState, useEffect } from 'react';
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, className }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsCollapsed(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Top Fixed Navbar */}
      <DashboardNavbar />

      {/* Responsive Left Sidebar */}
      <DashboardSidebar isCollapsed={isCollapsed} onToggleCollapse={() => setIsCollapsed(!isCollapsed)} />

      {/* Main Content Area */}
      <main
        className={cn(
          "flex-1 transition-all duration-300 pt-20 md:pt-24 pb-14 px-4 sm:px-6 md:px-8",
          isCollapsed ? "ml-0 md:ml-20" : "ml-0 md:ml-20 lg:ml-[280px]",
          className
        )}
      >
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
