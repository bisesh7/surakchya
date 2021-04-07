import React, { useEffect } from "react";
import NavbarComponent from "../NavbarComponent";
import { connect } from "react-redux";
import { userSignIn } from "../../Actions/authActions";
import axios from "axios";
import FrontPictureComponent from "./FrontPictureComponent";
import SearchBarComponent from "./SearchBarComponent";
import ExploreAndLiveAnywhereComponent from "./ExploreAndLiveAnywhereComponent";
import JoinAsAHostComponent from "./JoinAsAHostComponent";

const HomeComponent = (props) => {
  useEffect(() => {
    props.userSignIn();
  }, []);

  useEffect(() => {
    console.log(props.user);
  }, [props]);

  return (
    <div>
      <NavbarComponent {...props} />
      <SearchBarComponent />
      <FrontPictureComponent />
      <ExploreAndLiveAnywhereComponent />
      <JoinAsAHostComponent />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userSignIn: () => {
      // Check if the user is logged in.
      // If logged in, we will get the user and update the redux store
      // by passing a action else we do nothing
      return axios
        .get("/api/auth", {
          headers: {
            API_KEY: process.env.REACT_APP_API_KEY,
          },
        })
        .then((res) => {
          dispatch(userSignIn(res.data.userDetail));
        })
        .catch((err) => {
          if (err.response.status === 401) {
            console.log("Not logged in");
          }
        });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
