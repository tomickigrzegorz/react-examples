import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../store/actions/index";
import Logo from "./components/Logo";
import styles from "./Header.module.scss";

class Header extends Component {
  render() {
    const { count } = this.props;
    const cunterItem = (
      <div onClick={this.props.onMomodal} className={styles.counterHead}>
        Wybrane zdjęcia <span>{count}</span>
      </div>
    );
    return (
      <header className={`${styles.header} ${styles.imgShadow}`}>
        <Logo />
        {count > 0 ? cunterItem : ""}
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.home.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMomodal: () => dispatch(action.showModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
