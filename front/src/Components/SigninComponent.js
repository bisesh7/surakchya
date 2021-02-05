import React, { useState } from "react";
import { Container, Input, Button } from "reactstrap";
import NavbarComponent from "./NavbarComponent";

const SigninComponent = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInPressed = () => {
    console.log(email, password);
  };

  return (
    <div>
      <NavbarComponent {...props} />
      <Container>
        <div className="form d-flex justify-content-center">
          <div>
            <h3>Sign in</h3>
            <small className="text-muted">
              Register if you don't have an account
            </small>
            <div className="form-inputs mt-5">
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
              <Button
                color="primary"
                className="mt-4"
                onClick={signInPressed}
                block
              >
                Sign in
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SigninComponent;
