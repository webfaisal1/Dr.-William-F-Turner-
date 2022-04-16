import React, { Fragment } from "react";
import './Footer.css'

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Fragment>
      <div className="row w-100  mx-0 bg-dark text-white p-5">
        <div className="col-md-3 footer">
          <h6 className="mb-4">About us</h6>
          <p>
            Dr. William F. Turner is a thoracic surgeon in Tyler, Texas and is
            affiliated with Christus Mother Frances Hospital-Tyler. He received
            his medical degree from Baylor College of Medicine and has been in
            practice for more than 20 years.
          </p>
        </div>
        <div className="col-md-3 footer">
          <h6 className="mb-4">QuickLinks</h6>
          <h6>Homepages</h6>
          <h6>About</h6>
          <h6>Doctor</h6>
          <h6>Department</h6>
          <h6>News</h6>
          <h6>Contact</h6>
        </div>
        <div className="col-md-3 footer">
          <h6 className="mb-4">Press</h6>
          <h6>Press Release</h6>
          <h6>Contact Us</h6>
          <h6>Family Help</h6>
        </div>
        <div className="col-md-3 footer">
          <h6 className="mb-4">Address</h6>
          <h6>+1 222 333 444</h6>
          <h6>dr.williamfturner@gmail.com</h6>
        </div>
        <p className="copyright">
          <small>Copyright {year} © Dr. William F Turner</small>
        </p>
      </div>
    </Fragment>
  );
};

export default Footer;
