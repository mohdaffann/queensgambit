import React from "react";
import { Outlet } from 'react-router'
import Header from "../components/Header";
import Footer from "../components/Footer";
function Layout() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-[#0F1316]">
      <Header />
      <div className="flex-1">
        <Outlet />

      </div>
      <Footer />
    </div>
  )
}

export default Layout;
