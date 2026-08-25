import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { User, ChevronDown, LogOut, LayoutDashboard } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { cn } from "@/lib/utils";

export interface ProfileDropdownProps {
  className?: string;
}

export const ProfileDropdownSkeleton: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex items-center gap-2.5 p-1 pl-1.5 pr-3 rounded-full border border-border/50 bg-background/60 shadow-xs animate-pulse",
        className
      )}
    >
      {/* Avatar Skeleton */}
      <div className="w-8 h-8 rounded-full bg-muted/80 shrink-0" />
      
      {/* Name & Status Skeleton */}
      <div className="flex flex-col gap-1 pr-1">
        <div className="w-16 h-2.5 rounded bg-muted/80" />
        <div className="w-10 h-2 rounded bg-muted/60" />
      </div>

      {/* Chevron placeholder */}
      <div className="w-3.5 h-3.5 rounded bg-muted/60 shrink-0" />
    </div>
  );
};

export const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ className }) => {
  const { userProfile, profileCompletion, logout, isLoading } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Keyboard accessibility: Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  // Loading skeleton while candidate profile is initializing
  if (isLoading) {
    return <ProfileDropdownSkeleton className={className} />;
  }

  // If no user profile exists, don't render dropdown
  if (!userProfile) {
    return null;
  }

  const displayName =
    userProfile.name && userProfile.name !== "Candidate" && userProfile.name !== "User"
      ? userProfile.name
      : userProfile.phone || "User";

  const initial =
    userProfile.name && userProfile.name !== "Candidate" && userProfile.name !== "User"
      ? userProfile.name.charAt(0).toUpperCase()
      : "U";

  const handleLogout = () => {
    setIsOpen(false);
    logout();
    navigate("/");
  };

  return (
    <div ref={dropdownRef} className={cn("relative", className)}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-controls="profile-dropdown-menu"
        aria-label="User account menu"
        className="flex items-center gap-2.5 p-1 pl-1.5 pr-3 rounded-full hover:bg-muted/70 transition-all border border-border/60 bg-background/60 cursor-pointer shadow-xs group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {/* Avatar with Circular Setup Progress Ring */}
        <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
          <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 36 36" aria-hidden="true">
            <circle
              cx="18"
              cy="18"
              r="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="text-muted/60"
            />
            <circle
              cx="18"
              cy="18"
              r="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeDasharray={2 * Math.PI * 15}
              strokeDashoffset={2 * Math.PI * 15 * (1 - profileCompletion / 100)}
              strokeLinecap="round"
              className={cn(
                "transition-all duration-700 ease-out",
                profileCompletion === 100 ? "text-emerald-500" : "text-sky-500"
              )}
            />
          </svg>
          <div className="absolute inset-1 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs shadow-xs select-none">
            {initial}
          </div>
        </div>

        {/* User Info */}
        <div className="flex flex-col text-left">
          <span className="text-xs font-bold text-foreground max-w-[100px] truncate leading-tight">
            {displayName}
          </span>
          <span
            className={cn(
              "text-[10px] font-semibold leading-tight",
              profileCompletion === 100
                ? "text-emerald-600 dark:text-emerald-400 font-bold"
                : "text-primary font-bold"
            )}
          >
            {profileCompletion}% Setup
          </span>
        </div>

        <ChevronDown
          className={cn(
            "w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Profile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Click-outside backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              id="profile-dropdown-menu"
              role="menu"
              aria-label="User account options"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute right-0 top-12 w-64 p-2 rounded-2xl bg-card/95 backdrop-blur-xl border border-border/80 shadow-2xl z-50 space-y-1.5"
            >
              {/* Profile Card Header */}
              <div className="p-3 border-b border-border/50 bg-muted/40 rounded-xl">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-xs text-foreground truncate">{displayName}</span>
                  <span
                    className={cn(
                      "text-[10px] font-bold px-1.5 py-0.5 rounded-md",
                      profileCompletion === 100
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                        : "bg-primary/10 text-primary border border-primary/20"
                    )}
                  >
                    {profileCompletion}%
                  </span>
                </div>
                <div className="text-[11px] text-muted-foreground truncate mt-0.5">
                  {userProfile.email || userProfile.phone || "Profile Active"}
                </div>
                <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden mt-2.5">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all duration-500",
                      profileCompletion === 100 ? "bg-emerald-600" : "bg-primary"
                    )}
                    style={{ width: `${profileCompletion}%` }}
                  />
                </div>
              </div>

              {/* Menu Links */}
              <Link
                to="/dashboard/profile"
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                <div className="flex items-center gap-2.5">
                  <User className="w-4 h-4 text-primary" />
                  <span>My Profile & Setup</span>
                </div>
                {profileCompletion < 100 && (
                  <span className="text-[10px] text-primary font-bold bg-primary/10 px-1.5 py-0.5 rounded">
                    Complete
                  </span>
                )}
              </Link>

              <Link
                to="/dashboard"
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                <LayoutDashboard className="w-4 h-4 text-muted-foreground" />
                <span>Dashboard Home</span>
              </Link>

              <div className="pt-1 border-t border-border/40">
                <button
                  type="button"
                  role="menuitem"
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium text-rose-500 hover:bg-rose-500/10 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileDropdown;
