import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../share/utility'

const initilState = {
    isOpen: false,
    folderName: null,
    bodyStyle: 'auto'
};

const showGallery = (state, action) => {
    return updateObject(state, {
        isOpen: true,
        folderName: action.folderName,
        bodyStyle: 'hidden'
    });
};

const hideGallery = (state, action) => {
    return updateObject(state, {
        isOpen: false,
        bodyStyle: ''
    });
};

const reducer = (state = initilState, action) => {

    switch (action.type) {
        case actionTypes.SHOW_GALLERY: return showGallery(state, action);
        case actionTypes.HIDE_GALLERY: return hideGallery(state, action);
        default: return state;
    }
};

export default reducer;