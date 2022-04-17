import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Fragment >
      <div className="align-items-center justify-content-center d-flex">
          <img
            width={850}
            src="https://www.myphukettravel.com/myphukettravel/public/assets/front-end/images/404.gif"
            alt=""
          />
        </div>

        <Link className="btn-style btn" to="/" ><button>Back to the home</button></Link>
      
    </Fragment>
  );
};

export default NotFound;
