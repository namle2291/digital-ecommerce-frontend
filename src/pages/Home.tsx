import React from "react";
import NewArrival from "../components/Products/NewArrival";
import ProductRow from "../components/Features/FeatureRow";
import FeaturedProduct from "../components/Features/FeaturedProduct";

function Home() {
  return (
    <div className="">
      <NewArrival />
      <ProductRow />
      <FeaturedProduct />
    </div>
  );
}

export default Home;
