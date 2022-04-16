import React, { Fragment } from 'react';
import './Banner.css'

const Banner = () => {
  return (
    <Fragment>
         <section className="banner-img">
           <div className="heading">
              <h1>Your Health Our Priority</h1>
              <p>We offer the best care for you and your family</p>
              <button>About me</button>
           </div>
         </section>
    </Fragment>
      
  );
};

export default Banner;