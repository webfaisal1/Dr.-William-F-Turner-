import React, { Fragment, useState } from "react";
import { Button, Form } from "react-bootstrap";
import login from "../../../../images/form/form.png";
import facebook from "../../../../images/social-icon/facebook.png";
import google from "../../../../images/social-icon/google.png";
import github from "../../../../images/social-icon/github.png";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../../Loading/Loading";

const Login = () => {

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const [signInWithEmailAndPassword, user, loading, error] =  useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle] = useSignInWithGoogle(auth);

  
  let from = location.state?.from?.pathname || "/";

  if(loading){
    return <Loading/>
  }
  

  if(user){
    navigate(from, { replace: true });
  }

  const handleUserSignIn = event => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password)
  }

  return (
    <Fragment>
      <div className=" bg-color c">
        <div className="row mx-0">
          <div className="col-md-6 img-container ">
            <img className="img-fluid" src={login} alt="" />
          </div>
          <div className="col-md-6 align-items-center justify-content-center d-flex form-container">
            <Form onSubmit={handleUserSignIn} >
              <h2 className="text-center ">Login</h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control  onChange={(e) => setEmail(e.target.value)}  type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
              </Form.Group>

                  <p className="text-danger" >{error && error?.message}</p>

              <Link to="/signUp">
                <p>
                  <small className="login">Create an account</small>
                </p>
              </Link>
              <Button type="submit">Login</Button>

              <div className="d-flex align-items-center">
                <div className="or-style w-50"></div>
                <p className=" m-2 px-2">or</p>
                <div className="or-style w-50"></div>
              </div>

              <div className="pointer justify-content-between d-flex">
                <img width={30} src={facebook} alt="" />
                <img onClick={() => signInWithGoogle()} width={30} src={google} alt="" />
                <img width={30} src={github} alt="" />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
