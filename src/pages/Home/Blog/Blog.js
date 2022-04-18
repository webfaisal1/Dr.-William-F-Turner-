import React, { Fragment } from "react";
import { Card, CardGroup } from "react-bootstrap";
import auth from "../../../images/quistion-pic/auth.png";
import firebase from "../../../images/quistion-pic/firebase.webp";
import firebase2 from "../../../images/quistion-pic/firebae2.jpg";

const Blog = () => {
  return (
    <Fragment>
      <CardGroup>
        <Card className="m-5 shadow-sm">
          <Card.Img variant="top" src={auth} />
          <Card.Body>
            <Card.Title className="text-center">
              Difference between authorization and authentication
            </Card.Title>
            <Card.Text>
              <h6 className="mt-5">
                {" "}
                <strong>Authentication</strong>{" "}
              </h6>
              <p>Usually the first step of security access Control</p>
              <p>Verifies the user's identity</p>
              <p>
                Common methods include username, password, answer to a security
                question, code sent via SMS or email
              </p>
              <p>
                User biometric data like fingerprint, face recognition, retinal
                scan
              </p>
              <p>It's visible by the user</p>
              <p>It's changeable by the user</p>

              <h6>
                <strong>Authorization</strong>
              </h6>
              <p>Usually comes after authentication </p>
              <p>Grants of denies permissions to the user do something</p>
              <p>Permissions are granted and monitored by the organization</p>
              <p>
                Common methods include role-based access control and
                attribute-based access control
              </p>
              <p>It's not visible by the user </p>
              <p>Cannot be changed by the user</p>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="m-5 border shadow-sm">
          <Card.Img variant="top" src={firebase} />
          <Card.Body>
            <Card.Title className="text-center">
              {" "}
              Why are you using firebase? What other options do you have to
              implement authentication?
            </Card.Title>
            <Card.Text className="mt-5">hello</Card.Text>
          </Card.Body>
        </Card>

        <Card className="m-5 border shadow-sm">
          <Card.Img variant="top" src={firebase2} />
          <Card.Body>
            <Card.Title className="text-center" >
              What other services does firebase provide other than
              authentication
            </Card.Title>
            <Card.Text className="mt-5">
              Firebase Authentication provides backend services, an easy-to-use
              SDK, and a UI library built into your app to authenticate users.
              Most website users need to know their identity by supporting
              authentication using passwords, phone numbers, popular federated
              identity providers like Google, Facebook and Twitter and many
              more. An anonymous app allows an app to securely store user data
              in the cloud and provide the same personalized experience across
              all user devices.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Fragment>
  );
};

export default Blog;
