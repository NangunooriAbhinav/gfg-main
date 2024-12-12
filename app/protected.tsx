"use client";
import { useEffect } from "react";
import { useAuth } from "./context/AuthContext";

import { ReactNode } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const authContext = useAuth();
  const { isAuthenticated, isLoading } = authContext
    ? authContext
    : { isAuthenticated: false, isLoading: true };

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      window.location.href = "/login";
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : null;
}
