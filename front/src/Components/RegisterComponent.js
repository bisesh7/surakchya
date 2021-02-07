import React, { useState } from "react";
import { Container, Input, Button, Alert } from "reactstrap";
import NavbarComponent from "./NavbarComponent";
import axios from "axios";
import { functions } from "../Functions/Functions";

const RegisterComponent = (props) => {
  const [registerType, setRegisterType] = useState("hotel");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertColor, setAlertColor] = useState("info");
  const onAlertDismiss = () => {
    setAlertVisible(false);
    setAlertColor("info");
    setAlertMessage("");
  };
  const registerClicked = () => {
    if (
      !functions.isNotEmpty(name) ||
      !functions.isNotEmpty(email) ||
      !functions.isNotEmpty(password) ||
      !functions.isNotEmpty(retypedPassword)
    ) {
      setAlertColor("danger");
      setAlertMessage("Empty fields.");
      return setAlertVisible(true);
    }

    if (!functions.emailIsValid(email)) {
      setAlertColor("danger");
      setAlertMessage("Email is not valid.");
      return setAlertVisible(true);
    }

    if (!functions.isSameStrings(password, retypedPassword)) {
      setAlertColor("danger");
      setAlertMessage("Passwords do not match.");
      return setAlertVisible(true);
    }

    if (
      !functions.hasLowerCaseLetter(password) ||
      !functions.hasUpperCaseLetter(password) ||
      !functions.hasNumber(password) ||
      !functions.hasAtLeastEightCharacters(password)
    ) {
      setAlertColor("danger");
      setAlertMessage("Invalid Password");
      return setAlertVisible(true);
    }

    axios
      .post(
        "/api/user",
        {
          name,
          email,
          password,
          retypedPassword,
          registerType,
        },
        {
          headers: {
            API_KEY: process.env.REACT_APP_API_KEY,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
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
            <h3>Register</h3>
            <small className="text-muted">
              Sign in if you already have an account
            </small>
            <div className="form-inputs mt-5">
              <Input
                type="select"
                name="select"
                onChange={(e) => {
                  setRegisterType(e.target.value);
                }}
                defaultValue="hotel"
              >
                <option value="hotel">I am hotel.</option>
                <option value="normal">I am normal user.</option>
              </Input>
              <Input
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
              <Input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
              <Input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
              <Input
                type="password"
                placeholder="Retype Password"
                onChange={(e) => {
                  setRetypedPassword(e.target.value);
                }}
                value={retypedPassword}
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
