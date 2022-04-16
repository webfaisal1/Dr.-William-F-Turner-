import React, { Fragment } from "react";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Services from "../Services/Services";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <Services/>
      <Features/>
    </Fragment>
  );
};

export default Home;
