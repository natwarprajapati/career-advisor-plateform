import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  BookOpen,
  Briefcase,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Home,
  Upload,
  PenTool,
  Sparkles,
  LayoutGrid
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface SidebarSection {
  id: string;
  title: string;
  icon: React.ElementType;
  items: { label: string; href: string; icon?: React.ElementType }[];
}

const sections: SidebarSection[] = [
  {
    id: 'resumes',
    title: 'Resumes',
    icon: FileText,
    items: [
      { label: 'Created Resumes', href: '/dashboard/resumes/created', icon: PenTool },
      { label: 'Uploaded Resumes', href: '/dashboard/resumes/uploaded', icon: Upload },
    ],
  },
  {
    id: 'resources',
    title: 'Resources',
    icon: BookOpen,
    items: [
      { label: 'Enrolled Resources', href: '/dashboard/resources' },
    ],
  },
  {
    id: 'jobs',
    title: 'Jobs',
    icon: Briefcase,
    items: [
      { label: 'Applied Jobs', href: '/dashboard/jobs' },
    ],
  },
  {
    id: 'chat',
    title: 'Chat History',
    icon: MessageSquare,
    items: [
      { label: 'All Conversations', href: '/dashboard/chat-history' },
    ],
  },
];

export interface DashboardSidebarProps {
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  isCollapsed: controlledIsCollapsed,
  onToggleCollapse,
}) => {
  const [internalIsCollapsed, setInternalIsCollapsed] = useState(false);
  const isCollapsed = controlledIsCollapsed !== undefined ? controlledIsCollapsed : internalIsCollapsed;
  const toggleCollapse = onToggleCollapse || (() => setInternalIsCollapsed(!internalIsCollapsed));

  const [expandedSections, setExpandedSections] = useState<string[]>(['resumes']);
  const location = useLocation();

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 80 : 280 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      aria-label="Dashboard Sidebar"
      className={cn(
        "hidden md:flex fixed left-0 top-16 h-[calc(100vh-4rem)] bg-card/95 backdrop-blur-xl border-r border-border/80 z-30 flex-col select-none shadow-sm transition-colors"
      )}
    >
      {/* Header bar with Collapse Toggle */}
      <div className="p-3 border-b border-border/70 flex items-center justify-between h-14 shrink-0">
        <AnimatePresence mode="wait">
          {!isCollapsed ? (
            <motion.div
              key="expanded-header"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              className="flex items-center gap-2.5 overflow-hidden pl-1"
            >
              <div className="w-7 h-7 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-500 shrink-0">
                <LayoutGrid className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xs text-foreground tracking-tight">WORKSPACE NAV</span>
                <span className="text-[10px] text-muted-foreground">Management Panel</span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="collapsed-header"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="mx-auto"
            >
              <div className="w-7 h-7 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-500">
                <LayoutGrid className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={toggleCollapse}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors shrink-0 cursor-pointer"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 text-sky-500" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Navigation List - Flexible & Scrollable */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden p-3 space-y-1.5 scrollbar-thin">
        {/* Dashboard Home */}
        <Link
          to="/dashboard"
          title={isCollapsed ? "Dashboard Home" : undefined}
          className={cn(
            "group relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
            location.pathname === '/dashboard'
              ? "bg-sky-500/15 text-sky-600 dark:text-sky-400 font-semibold shadow-xs"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
          )}
        >
          <Home className={cn("w-5 h-5 shrink-0 transition-transform group-hover:scale-105", location.pathname === '/dashboard' && "text-sky-500")} />
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="truncate flex-1"
              >
                Dashboard Home
              </motion.span>
            )}
          </AnimatePresence>
          {location.pathname === '/dashboard' && !isCollapsed && (
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
          )}
        </Link>

        {/* Dynamic Nested Sections */}
        {sections.map((section) => {
          const isSectionActive = section.items.some((i) => location.pathname === i.href);
          const isExpanded = expandedSections.includes(section.id) && !isCollapsed;

          return (
            <div key={section.id} className="space-y-1">
              <button
                type="button"
                onClick={() => !isCollapsed && toggleSection(section.id)}
                title={isCollapsed ? section.title : undefined}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer",
                  isSectionActive && isCollapsed
                    ? "bg-sky-500/15 text-sky-600 dark:text-sky-400 font-semibold"
                    : isExpanded
                    ? "bg-muted/70 text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                )}
              >
                <section.icon className={cn("w-5 h-5 shrink-0 transition-transform", isSectionActive && "text-sky-500")} />
                <AnimatePresence mode="wait">
                  {!isCollapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex-1 text-left truncate"
                    >
                      {section.title}
                    </motion.span>
                  )}
                </AnimatePresence>
                {!isCollapsed && (
                  <ChevronRight
                    className={cn(
                      "w-4 h-4 text-muted-foreground/70 transition-transform duration-200 shrink-0",
                      isExpanded && "rotate-90 text-foreground"
                    )}
                  />
                )}
              </button>

              {/* Sub-Items with Indentation */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-6 pr-1 space-y-1 pt-1 pb-0.5 border-l-2 border-border/40 ml-5 my-0.5">
                      {section.items.map((item) => {
                        const isItemActive = location.pathname === item.href;
                        return (
                          <Link
                            key={item.href}
                            to={item.href}
                            className={cn(
                              "flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                              isItemActive
                                ? "bg-sky-500/15 text-sky-600 dark:text-sky-400 font-semibold shadow-xs"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                            )}
                          >
                            {item.icon ? (
                              <item.icon className="w-3.5 h-3.5 shrink-0" />
                            ) : (
                              <span className="w-1.5 h-1.5 rounded-full bg-current/40 shrink-0" />
                            )}
                            <span className="truncate">{item.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>

      {/* Footer Return Link */}
      <div className="p-3 border-t border-border/70 shrink-0">
        <Link
          to="/"
          title={isCollapsed ? "Back to Landing Page" : undefined}
          className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 shrink-0" />
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="truncate"
              >
                Back to Landing
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
      </div>
    </motion.aside>
  );
};

export default DashboardSidebar;
