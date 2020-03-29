import PropTypes from "prop-types";
import React, { Component } from "react";
import LazyLoad from "react-lazy-load";
import { connect } from "react-redux";
import classes from "../../../assets/scss/index.module.scss";
import * as action from "../../../store/actions/index";
import ColoredScrollbars from "./ColoredScrollbars";
import styles from "./GalleryList.module.scss";
import Spinner from "./Spinner";

class GalleryList extends Component {
  onInitAction = (id, image) => {
    const { onShowLargePhoto, onActivePhoto } = this.props;
    onShowLargePhoto(image);
    onActivePhoto(id);
  };

  render() {
    const { isLoading, thumbnailList } = this.props;

    let listThumb = <Spinner />;
    if (!isLoading) {
      listThumb = thumbnailList.map(item => {
        const countItem = item.countItem ? (
          <strong>{item.countItem}</strong>) : ("");
        return (
          <div
            key={item.id}
            onClick={() => this.onInitAction(item.id, item.image)}
            className={`${styles.galleryItem} ${item.active === true ? styles.active : ""}`}>{" "}
            {countItem}
            <div className={classes.aspectRatio}>
              <LazyLoad offsetBottom={200}>
                <img src={item.image} alt={item.image} onMouseOver={() => this.props.onShowLargePhoto(item.image)} />
              </LazyLoad>
            </div>
          </div>
        );
      });
    }

    return (
      <div className={`${classes.col} ${classes.col3}`}>
        <div className={`${styles.galleryItem} ${styles.gallery}`}>
          <ColoredScrollbars>{listThumb}</ColoredScrollbars>
        </div>
      </div>
    );
  }
}

GalleryList.propTypes = {
  thumbnailList: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    thumbnailList: state.home.thumbnailList,
    isLoading: state.home.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onShowLargePhoto: item => dispatch(action.showLargePhoto(item)),
    onActivePhoto: id => dispatch(action.activePhoto(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryList);
