import React from "react";
import { Outlet } from 'react-router'
import Header from "../components/Header";
import Footer from "../components/Footer";
function Layout() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#0F1316]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout;
