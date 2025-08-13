"use client"
import { SessionProvider } from "next-auth/react";
import Dashboard from "./page";

export default function DashboardPageWrapper() {
  return (
    <SessionProvider>
      <Dashboard />
    </SessionProvider>
  );
}
