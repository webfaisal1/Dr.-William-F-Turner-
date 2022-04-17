import { signOut } from "firebase/auth";
import React, { Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {

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

            <div className="btn-style d-sm-block">
              {
                user ? <button onClick={handleSignOut} >Sing Out</button> : <CustomLink to="/login">Login</CustomLink>
              }
              <Link to="signUp">
                <button>Sign Up</button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
