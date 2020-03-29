import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "../../../assets/scss/index.module.scss";
import styles from "./BigImage.module.scss";

class BigImage extends Component {
  render() {
    const { largePhoto } = this.props;
    const image = largePhoto ? (
      <img src={largePhoto} alt={largePhoto} />)
      : (
        <h1 className={styles.selectImage}>Wybierz zdjęcie</h1>
      );
    return (
      <div className={`${classes.col} ${classes.col9}`}>
        <div className={`${styles.bigImage} ${classes.aspectRatio}`}>
          {image}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    largePhoto: state.home.largePhoto
  };
};

export default connect(mapStateToProps)(BigImage);
