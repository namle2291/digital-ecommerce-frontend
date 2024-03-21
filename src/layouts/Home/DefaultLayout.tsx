import React from "react";
import TopHeader from "../../components/Header/TopHeader";
import Header from "../../components/Header/Header";

type DefaultLayoutType = {
  children?: JSX.Element;
};

function DefaultLayout({ children }: DefaultLayoutType) {
  return (
    <div>
      <TopHeader />
      <Header />
      {children}
    </div>
  );
}

export default DefaultLayout;
