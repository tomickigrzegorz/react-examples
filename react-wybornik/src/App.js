import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import classes from "./assets/scss/index.module.scss";
import Header from "./containers/Header/Header";
import GalleryContener from "./containers/GalleryContener/GalleryContener";
import Spinner from "./containers/GalleryContener/components/Spinner";

import * as action from "./store/actions/index";

import asyncComponent from "./containers/hoc/acyncComponent";
const AsyncModal = asyncComponent(() => {
  return import("./containers/GalleryContener/components/Modal");
});

class App extends Component {
  componentDidMount() {
    const { onInitPhoto } = this.props;
    const pathurl = window.location.search.split("?")[1];
    const checkUrl = pathurl ? pathurl : "";
    onInitPhoto(checkUrl);
  }

  render() {
    const { isLoading, isOpen } = this.props;

    let orders = <Spinner />;
    if (!isLoading) {
      orders = (
        <div className={`${isOpen ? classes.blur : ""} ${classes.content}`}>
          <Header />
          <GalleryContener />
        </div>
      );
    }
    return (
      <Fragment>
        {orders}
        {isOpen ? <AsyncModal /> : ""}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.home.isOpen,
    isLoading: state.home.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitPhoto: pathurl => dispatch(action.initPhoto(pathurl))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
