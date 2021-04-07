import React, { Fragment, useEffect, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import axios from "axios";
import { connect } from "react-redux";
import { userSignOut } from "../Actions/authActions";

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  useEffect(() => {
    if (props.user) {
      setUserIsLoggedIn(true);
    } else {
      setUserIsLoggedIn(false);
    }
  }, [props.user]);

  const signOutPressed = (e) => {
    e.preventDefault();
    props.userSignOut();
  };

  const guestLinks = (
    <Fragment>
      <NavItem>
        <NavLink
          onClick={(e) => {
            e.preventDefault();
            props.history.push("/signin");
          }}
          href="/signin"
        >
          Sign In
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          onClick={(e) => {
            e.preventDefault();
            props.history.push("/register");
          }}
          href="/register"
        >
          Register
        </NavLink>
      </NavItem>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <NavItem>
        <NavLink onClick={signOutPressed} href="/signout">
          Sign Out
        </NavLink>
      </NavItem>
    </Fragment>
  );

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Surakchya</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/bisesh7/surakchya">
                GitHub
              </NavLink>
            </NavItem>
            {userIsLoggedIn ? authLinks : guestLinks}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    userSignOut: () => {
      return axios
        .get("/api/auth/signout", {
          headers: {
            API_KEY: process.env.REACT_APP_API_KEY,
          },
        })
        .then(() => {
          dispatch(userSignOut());
        });
    },
  };
};

export default connect(null, mapDispatchToProps)(NavbarComponent);
