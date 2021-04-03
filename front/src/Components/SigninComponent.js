import axios from "axios";
import React, { useState } from "react";
import { Container, Input, Button, Alert } from "reactstrap";
import NavbarComponent from "./NavbarComponent";

const SigninComponent = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("hotel");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertColor, setAlertColor] = useState("info");
  const onAlertDismiss = () => {
    setAlertVisible(false);
    setAlertColor("info");
    setAlertMessage("");
  };

  const signInPressed = () => {
    axios
      .post(
        "/api/auth",
        { email, password, userType },
        {
          headers: {
            API_KEY: process.env.REACT_APP_API_KEY,
          },
        }
      )
      .then((res) => {
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err.response.data);
        setAlertMessage(err.response.data.msg);
        setAlertColor("danger");
        setAlertVisible(true);
      });
  };

  return (
    <div>
      <NavbarComponent {...props} />
      <Container>
        <div className="form d-flex justify-content-center">
          <div>
            <Alert
              color={alertColor}
              isOpen={alertVisible}
              toggle={onAlertDismiss}
            >
              {alertMessage}
            </Alert>
            <h3>Sign in</h3>
            <small className="text-muted">
              Register if you don't have an account
            </small>
            <div className="form-inputs mt-5">
              <Input
                type="select"
                name="select"
                onChange={(e) => {
                  setUserType(e.target.value);
                }}
                defaultValue="hotel"
              >
                <option value="hotel">I am hotel.</option>
                <option value="normal">I am normal user.</option>
              </Input>
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
