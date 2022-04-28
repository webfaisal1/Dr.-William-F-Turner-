import React, { Fragment, useState } from "react";
import { Button, Form } from "react-bootstrap";
import signUp from "../../../../images/form/signup.png";
import facebook from "../../../../images/social-icon/facebook.png";
import google from "../../../../images/social-icon/google.png";
import github from "../../../../images/social-icon/github.png";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import Loading from "../../Loading/Loading";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user1, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [signInWithGoogle, user2] = useSignInWithGoogle(auth);
  const [signInWithGithub, user3] = useSignInWithGithub(auth);

  // if (loading) {
  //   return <Loading />;
  // }

  if (user1 || user2 || user3) {
    navigate("/");
  }

  const handleUserSignUp = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Password did not match confirm password");
      return;
    }
    if (password.length < 6) {
      setError("Password must be 6 character type");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <Fragment>
      <div className="pb-5 bg-color">
        <div className="row mx-0">
          <div className="col-md-6 img-container ">
            <img className="img-fluid" src={signUp} alt="" />
          </div>
          <div className="col-md-6 align-items-center justify-content-center d-flex form-container">
            <Form onSubmit={handleUserSignUp}>
              <h2 className="text-center ">Sign Up</h2>
              <Form.Group className="mb-3" controlId="formBasicEmail1">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword1">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
                <p className="mt-2 text-danger">{error}</p>
                <p className="mt-2 text-danger">{hookError?.message}</p>
              </Form.Group>
              <Link to="/login">
                <p>
                  <small className="login">Already have an account</small>
                </p>
              </Link>

              <Button className="submit-btn" type="submit">
                Sign Up
              </Button>

              <div className="d-flex align-items-center">
                <div className="or-style w-50"></div>
                <p className=" m-2 px-2">or</p>
                <div className="or-style w-50"></div>
              </div>

              <div className="pointer justify-content-between d-flex">
                <img width={30} src={facebook} alt="" />

                <img
                  onClick={() => signInWithGoogle()}
                  width={30}
                  src={google}
                  alt=""
                />

                <img
                  onClick={() => signInWithGithub()}
                  width={30}
                  src={github}
                  alt=""
                />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUp;
