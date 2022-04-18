import React, { Fragment } from 'react';
import './ExperiencesCard.css'

const ExperiencesCard = ({experience}) => {

  const { img, name,  details } = experience;

  return (
    <Fragment>
<div className="col-md-4">
       <div className='d-flex justify-content-center' >
       <div className="card border-0 experiences-card">
          <img className="card-img-top d-block mx-auto" width={300} src={img} alt="" />
          <div className="card-body text-center">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{details.slice(0,40)}...</p>
          </div>
        </div>
       </div>
      </div>
    </Fragment>
  );
};

export default ExperiencesCard;