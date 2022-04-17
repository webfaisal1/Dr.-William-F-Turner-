import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import './ServicesCard.css'

const ServicesCard = ({ service }) => {
  const { img, name, price, details } = service;
  return (
    <Fragment>
      <div className="col-md-4">
        <div className="card shadow-sm card-style">
          <img className="card-img-top" src={img} alt="" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{details.slice(0,80)}...</p>
            <h6>${price}</h6>
            <Link to='/checkOut' ><button>Check out</button></Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ServicesCard;
