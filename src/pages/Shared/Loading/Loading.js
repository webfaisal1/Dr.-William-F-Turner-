import React, { Fragment } from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <Fragment>
      <div
        style={{ height: "500px" }}
        className="d-flex w-100 justify-content-center align-items-center"
      >
        <Spinner animation="border" variant="primary" />
      </div>
    </Fragment>
  );
};

export default Loading;
