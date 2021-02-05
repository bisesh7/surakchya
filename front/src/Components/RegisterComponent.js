import React, { useState } from "react";
import { Container, Input, Button } from "reactstrap";
import NavbarComponent from "./NavbarComponent";

const RegisterComponent = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");

  const registerClicked = () => {
    console.log(name, email, password, retypedPassword);
  };

  return (
    <div>
      <NavbarComponent {...props} />
      <Container>
        <div className="form d-flex justify-content-center">
          <div>
            <h3>Register</h3>
            <small className="text-muted">
              Sign in if you already have an account
            </small>
            <div className="form-inputs mt-5">
              <Input
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Input
                type="password"
                placeholder="Retype Password"
                onChange={(e) => {
                  setRetypedPassword(e.target.value);
                }}
              />
              <Button
                color="primary"
                className="mt-4"
                block
                onClick={registerClicked}
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RegisterComponent;
