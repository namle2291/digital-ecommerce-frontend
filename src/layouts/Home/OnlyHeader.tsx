import React from "react";
import TopHeader from "../../components/Header/TopHeader";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
function OnlyHeader() {
  return (
    <div>
      <TopHeader />
      <Header />
      <Navbar />
      <Breadcrumb />
      <div className="wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default OnlyHeader;
