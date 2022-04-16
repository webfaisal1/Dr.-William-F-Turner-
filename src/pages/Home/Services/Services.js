import React, { Fragment, useEffect, useState } from "react";
import ServicesCard from "../ServicesCard/ServicesCard";

const Services = () => {

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('services.json')
    .then(res => res.json())
    .then(data => setServices(data))
  },[])

  return (
    <Fragment>
      <div className="text-center">
        <h3>SERVICES</h3>
        <p>CHECK HERE HOW CAN I HELP YOU</p>
      </div>

      <div className="container mt-5 mb-5">
        <div className="row text-center g-4 justify-content-center align-items-center d-flex mx-0">
        {
          services.map(service => <ServicesCard key={service.id} service={service} />)
        }
      </div>
      </div>
    </Fragment>
  );
};

export default Services;
