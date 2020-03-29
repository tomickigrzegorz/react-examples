import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TopImage from 'Components/TopImage/TopImage';
import Gallery from 'Components/Gallery/Gallery';
import GalleryModal from 'Components/Gallery/GalleryModal/GalleryModal';

import Context from 'Components/Context/Context';

import galleryItem from 'Data/galleryHomePage.json'
import text from 'Data/textDescription';

import styles from './Home.css';

import * as actionCreators from 'Store/actions/index'
class HomePage extends Component {

  componentDidMount() {
    document.title = "Fotografia ślubna, zdjęcia ślubne, Warszawa, Lublin, Chełm";
  }

  render() {
    document.body.style.overflowY = this.props.bodyStyle;

    let curentGallery = null;

    if (this.props.openIs) {
      curentGallery = (
        <GalleryModal
          galleryNameShow={this.props.nameFolder}
          modalActive={this.props.openIs}
          click={this.props.onHideGalleryHandler}
        />
      );
    }

    const galleryPlace = galleryItem.map((item, index) => (
      <Gallery
        key={index}
        id={item.id}
        name={item.name}
        type={item.type}
        clicked={() => this.props.onShowGalleryHandler(item.folder)}
        thumbnail={item.thumbnail}
      />
    ));

    return (
      <Fragment>
        <TopImage paralax="IMG_6276.jpg" />
        <Context>{text.home.a}</Context>
        <div
          className={`homePage container ${styles.grid__container} clearfix`}
        >
          {galleryPlace}
        </div>
        {curentGallery}
        <div
          className="context clearfix"
          dangerouslySetInnerHTML={{ __html: text.home.b }}
        />
      </Fragment>
    );
  }
};

HomePage.propTypes = {
    description: PropTypes.string
};

const mapStateToProps = state => {
    return {
        openIs: state.home.isOpen,
        nameFolder: state.home.folderName,
        bodyStyle: state.home.bodyStyle
    }
}

const mapDispatchToProps = dispach => {
    return {
        onShowGalleryHandler: (item) => dispach(actionCreators.showGallery(item)),
        onHideGalleryHandler: () => dispach(actionCreators.hideGallery())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);