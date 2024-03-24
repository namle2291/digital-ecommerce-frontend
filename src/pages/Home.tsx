import React from "react";
import NewArrival from "../components/Products/NewArrival/NewArrival";
import ProductRow from "../components/Features/FeatureRow";
import FeaturedProduct from "../components/Features/FeaturedProduct";
import HomeProduct from "../components/Products/HomeProduct/HomeProduct";

function Home() {
  return (
    <div>
      <NewArrival />
      <ProductRow />
      <FeaturedProduct />
      <HomeProduct/>
    </div>
  );
}

export default Home;
