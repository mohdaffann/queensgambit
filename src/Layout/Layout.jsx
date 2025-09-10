import React from "react";
import { Outlet } from 'react-router'
import Header from "../components/Header";
function Layout() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#0F1316]">
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout;
