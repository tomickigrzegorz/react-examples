import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../../store/actions/index";
import styles from "./Modal.module.scss";
import SingleImage from "./SingleImage";

class Modal extends Component {
  onSendImages = () => {
    const { thumbnailList } = this.props;

    const hashUrl = window.location.search.split("?")[1];
    const mail = process.env.REACT_APP_MAIL;
    const bodyMail = thumbnailList
      .filter(item => item.active === true)
      .map(item => {
        return `${item.image.split("/").pop(-1)} | szt.: ${
          item.countItem
          }%0D%0A`;
      }).join("");

    window.location.href = `
          mailto:${mail}
          ?subject=Zdjęcia do druku - ${hashUrl}
          &body=Poniżej lista zdjęć wybrana do druku%0D%0A%0D%0A ${bodyMail}
    `;
  };

  render() {
    const { thumbnailList } = this.props;

    const imageDiv = thumbnailList
      .filter(item => item.active === true)
      .map(item => {
        return (
          <div key={item.id} className={styles.modalItem}>
            <SingleImage itemImg={item} />
          </div>
        );
      });

    return (
      <div className={styles.modalBack}>
        <div className={styles.modal}>
          <div className={styles.modalButtonGroup}>
            <div onClick={this.props.onCloseModal} className={styles.modalButtonClose}>Zamknij</div>
            <div onClick={this.onSendImages} className={styles.modalButtonSend}>Wyślij</div>
          </div>
          <div className={styles.modalBody}>{imageDiv}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    thumbnailList: state.home.thumbnailList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCloseModal: item => dispatch(action.closeModal(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
