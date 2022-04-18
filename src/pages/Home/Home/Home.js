import React, { Fragment } from "react";
import Banner from "../Banner/Banner";
import Experiences from "../Experiences/Experiences";
import Features from "../Features/Features";
import Services from "../Services/Services";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <Services/>
      <Features/>
      <Experiences/>
    </Fragment>
  );
};

export default Home;
