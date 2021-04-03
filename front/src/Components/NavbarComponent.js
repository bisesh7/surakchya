import React, { useState } from "react";
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

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const signOutPressed = (e) => {
    e.preventDefault();
    axios
      .get("/api/auth/signout", {
        headers: {
          API_KEY: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Surakchya</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
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
            <NavItem>
              <NavLink onClick={signOutPressed} href="/signout">
                Sign Out
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
