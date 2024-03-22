import React from "react";
import TopHeader from "../../components/Header/TopHeader";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Banner from "../../components/Banner/Banner";

type DefaultLayoutType = {
  children?: JSX.Element;
};

function DefaultLayout({ children }: DefaultLayoutType) {
  return (
    <div>
      <TopHeader />
      <Header />
      <Navbar />
      <Banner />
      <div className="wrapper">
        <div className="py-[20px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
