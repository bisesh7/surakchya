import React from "react";
import NavbarComponent from "./NavbarComponent";

const HomeComponent = (props) => {
  return (
    <div>
      <NavbarComponent {...props} />
    </div>
  );
};

export default HomeComponent;
