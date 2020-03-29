import React from 'react';

import styles from './GalleryModal.css'
import GalleryIamge from './GalleryImage/GalleryImage';

const specificGallery = (props) => {
    const { modalActive, click, galleryNameShow, name } = props;

    return (
        <div onClick={click} className={`${styles.modal__gallery} ${modalActive}`}>
            <div className={styles.close__layer}></div>
            <div className="container">
                <GalleryIamge
                    folderName={galleryNameShow}
                    alt={name} />
            </div>
        </div>
    );
};

export default specificGallery;