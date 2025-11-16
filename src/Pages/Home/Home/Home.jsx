import React from "react";
import Banner from "../Banner";
import HowWork from "../HowWork";
import OurServices from "../OurServices";
import Brands from "../Brands";
import Reviews from "../Reviews";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner />
      <HowWork />
      <OurServices />
      <Brands />
      <Reviews reviewsPromise={reviewsPromise} />
    </div>
  );
};

export default Home;
