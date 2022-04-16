import React, { Fragment } from "react";
import './ServicesCard.css'

const ServicesCard = ({ service }) => {
  const { img, name, details } = service;
  return (
    <Fragment>
      <div className="col-md-4">
        <div className="card shadow-sm card-style">
          <img className="card-img-top" src={img} alt="" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{details.slice(0,80)}...</p>
            <button>Check out</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ServicesCard;
