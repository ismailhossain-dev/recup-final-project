//==========React leaflet map use =================
import React from "react";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Reviews from "../Reviews/Reviews";
//reviews data fetch
const reviewsPromise = fetch("/reviews.json").then((res) => res.json());
const Home = () => {
  return (
    <div>
      <Banner />
      <Brands />
      <Reviews reviewPromise={reviewsPromise} />
    </div>
  );
};

export default Home;
