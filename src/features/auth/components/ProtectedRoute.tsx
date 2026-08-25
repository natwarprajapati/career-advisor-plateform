import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import { Spinner } from "@/ui";

interface ProtectedRouteProps {
  children?: React.ReactNode;
  fallbackUrl?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  fallbackUrl = "/?getStarted=true",
}) => {
  const { userProfile, isLoading } = useUser();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Spinner size="lg" label="Verifying authentication..." variant="primary" />
      </div>
    );
  }

  if (!userProfile) {
    return (
      <Navigate
        to={fallbackUrl}
        replace
        state={{ from: location.pathname, fromDashboard: true }}
      />
    );
  }

  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;
