import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcaseMedical, faUserDoctor, faStethoscope, faHospital } from '@fortawesome/free-solid-svg-icons'
import './Features.css'

const Features = () => {
  return (
    <Fragment>
       <div className="bg-color">
       <div className="text-center pt-5 pb-5">
        <h3>FEATURES</h3>
        <p>THAT'S WHY YOU SHOULD CHOOSE ME AS YOUR PERSONAL DOCTOR.YOU</p>
      </div>

       <div className=" pb-5 pt-3">
       <div className="row mx-0 icon-style text-center">
          <div className="col-md-3">
            <FontAwesomeIcon icon={faBriefcaseMedical} />
            <h5>BriefcaseMedical</h5>
          </div>
          <div className="col-md-3">
            <FontAwesomeIcon icon={faUserDoctor} />
            <h5>UserDoctor</h5>
          </div>
          <div className="col-md-3">
            <FontAwesomeIcon icon={faStethoscope} />
            <h5>Stethoscope</h5>
          </div>
          <div className="col-md-3">
            <FontAwesomeIcon icon={faHospital} />
            <h5>Hospital</h5>
          </div>
        </div>
       </div>
       </div>

    </Fragment>
  );
};

export default Features;