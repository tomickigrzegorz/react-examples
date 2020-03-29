import * as actionTypes from './actionTypes'

export const showGallery = (value) => {
    return {
        type: actionTypes.SHOW_GALLERY,
        folderName: value
    };
};

export const hideGallery = () => {
    return {
        type: actionTypes.HIDE_GALLERY
    };
};