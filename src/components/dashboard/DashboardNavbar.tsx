import { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  BookOpen,
  Briefcase,
  Target,
  Upload,
  Home,
  Sparkles,
  Menu,
  X,
  User,
  ChevronDown,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useUser } from "@/contexts/UserContext";

import { ProfileDropdown } from "./ProfileDropdown";

const navItems = [
  { href: "/dashboard", icon: Home, label: "Dashboard" },
  { href: "/dashboard/profile", icon: User, label: "Profile" },
  { href: "/resume-screening", icon: Upload, label: "Screen Resume" },
  { href: "/resume-builder", icon: FileText, label: "Build Resume" },
  { href: "/skill-gap", icon: Target, label: "Skill Gap" },
  { href: "/resources", icon: BookOpen, label: "Resources" },
  { href: "/jobs", icon: Briefcase, label: "Jobs" },
];

const dashboardSubItems = [
  { href: "/dashboard/profile", label: "My Profile & Career Details" },
  { href: "/dashboard/resumes/created", label: "Created Resumes" },
  { href: "/dashboard/resumes/uploaded", label: "Uploaded Resumes" },
  { href: "/dashboard/jobs", label: "Applied Jobs" },
  { href: "/dashboard/resources", label: "Saved Resources" },
  { href: "/dashboard/chat-history", label: "Chat History" },
];

const DashboardNavbar = () => {
  const location = useLocation();
  const { userProfile, profileCompletion } = useUser();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard accessibility: Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isMobileMenuOpen]);

  const displayName =
    userProfile?.name &&
      userProfile.name !== "Candidate" &&
      userProfile.name !== "User"
      ? userProfile.name
      : userProfile?.phone || "User";

  const initial =
    userProfile?.name &&
      userProfile.name !== "Candidate" &&
      userProfile.name !== "User"
      ? userProfile.name.charAt(0).toUpperCase()
      : "U";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-navbar" : "bg-background/80 backdrop-blur-md"
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center shadow-sm">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-sm text-primary hidden sm:block">
              AI Career<span className="text-secondary">Nav</span>
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-4">
            <div className="flex items-center gap-1 bg-muted/50 rounded-full px-2 py-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all duration-200 text-xs font-semibold",
                      isActive
                        ? "text-primary bg-background shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-background/50",
                    )}
                  >
                    <item.icon className="w-3.5 h-3.5" />
                    <span className="hidden lg:block">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <ProfileDropdown />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass-navbar border-t border-border/30 max-h-[85vh] overflow-y-auto"
        >
          <div className="container-custom py-4 flex flex-col gap-2">
            {/* Mobile User Profile Status Card */}
            {userProfile && (
              <div className="p-3 rounded-xl bg-card border border-border/70 mb-2">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">
                      {initial}
                    </div>
                    <div>
                      <div className="font-bold text-xs text-foreground">
                        {displayName}
                      </div>
                      <div className="text-[10px] text-muted-foreground">
                        Setup Status
                      </div>
                    </div>
                  </div>
                  <span
                    className={cn(
                      "text-xs font-bold px-2 py-0.5 rounded-full",
                      profileCompletion === 100
                        ? "bg-emerald-500/10 text-emerald-600"
                        : "bg-primary/10 text-primary",
                    )}
                  >
                    {profileCompletion}% Done
                  </span>
                </div>
                <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all",
                      profileCompletion === 100
                        ? "bg-emerald-600"
                        : "bg-primary",
                    )}
                    style={{ width: `${profileCompletion}%` }}
                  />
                </div>
              </div>
            )}

            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors text-sm",
                    isActive
                      ? "text-primary bg-primary/10 font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}

            {/* Dashboard Sub-Items */}
            <div className="pt-2 border-t border-border/40 mt-1">
              <p className="text-xs font-semibold text-muted-foreground uppercase px-4 py-1">
                Dashboard Management
              </p>
              {dashboardSubItems.map((subItem) => (
                <Link
                  key={subItem.href}
                  to={subItem.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center px-4 py-2 text-sm rounded-lg transition-colors",
                    location.pathname === subItem.href
                      ? "text-primary font-medium bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                  )}
                >
                  {subItem.label}
                </Link>
              ))}
            </div>

            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 border-t border-border pt-3 mt-1 text-sm font-medium"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default DashboardNavbar;
