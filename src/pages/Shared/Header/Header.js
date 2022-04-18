import { signOut } from "firebase/auth";
import React, { Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {

  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth)
  }

  return (
    <Fragment>
      <Navbar sticky="top" bg="light" className="p-3" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Dr. William F Turner
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-5">
              <Nav.Link as={CustomLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={CustomLink} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={CustomLink} to="/about">
                About
              </Nav.Link>
            </Nav>

            <div className="btn-style d-flex flex-column flex-md-row align-items-start align-items-md-center ">
              {
                user ? <button onClick={handleSignOut} >Sing Out</button> : <CustomLink className="m-0" to="/login">Login</CustomLink>
              }
              
                <button className=" ms-0 ms-md-3 mt-3 mt-md-0 " onClick={() => navigate('/signUp')} >Sign Up</button>
              
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
