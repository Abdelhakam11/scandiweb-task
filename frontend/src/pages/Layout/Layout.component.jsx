import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer.component";

export default function Layout() {
  return (
    <>
      <Outlet></Outlet>
      <Footer />
    </>
  );
}
