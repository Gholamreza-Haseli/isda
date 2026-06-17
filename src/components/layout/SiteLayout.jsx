import React from "react";
import { Outlet } from "react-router-dom";
import MegaMenu from "@/components/navigation/MegaMenu";
import Footer from "@/components/navigation/Footer";

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <MegaMenu />
      <main className="flex-1 pt-16 lg:pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
