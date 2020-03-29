import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import classes from "../../../assets/scss/index.module.scss";
import * as action from "../../../store/actions/index";
import styles from "./Modal.module.scss";

class SingleImage extends Component {
  render() {
    const { itemImg } = this.props;
    const itemimg = itemImg.countItem ? itemImg.countItem : 1;
    return (
      <Fragment>
        <div className={styles.modalItem}>
          <div className={`${styles.modalImg} ${classes.aspectRatio}`}>
            <img src={itemImg.image} alt={itemImg.id} />
          </div>
          <div className={styles.modalQuantity}>{itemimg}</div>
        </div>
        <div className={styles.modalbuttonGroup}>
          <div onClick={() => this.props.onRemoveSinglePhoto(itemImg.id)} className={styles.modalImgRemove}>
            Usuń <span>{itemImg.image.split("/").pop(-1)}</span>
          </div>
          <div className={styles.action}>
            <button onClick={() => this.props.onDecrement(itemImg.id, itemimg)} disabled={itemimg === 1 ? true : false}>-</button>
            <button onClick={() => this.props.onIncrement(itemImg.id, itemimg)}>+</button>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRemoveSinglePhoto: value => dispatch(action.removeSinglePhoto(value)),
    onDecrement: (imgId, counter) => dispatch(action.decrementPhoto(imgId, counter)),
    onIncrement: (imgId, counter) => dispatch(action.incrementPhoto(imgId, counter))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SingleImage);
