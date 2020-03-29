import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../share/utility";

const initialState = {
  thumbnailList: [],
  largePhoto: "",
  isOpen: false,
  id: 0,
  count: 0,
  countItem: 1,
  error: false,
  isLoading: false,
  sendMail: false
};

const showLargePhoto = (state, action) => {
  return updateObject(state, {
    largePhoto: action.largePhoto
  });
};

const getGalleryList = (state, action) => {
  return updateObject(state, {
    thumbnailList: action.thumbnailList,
    isLoading: false
  });
};

const closeModal = (state, action) => {
  return updateObject(state, {
    isOpen: false
  });
};

const activePhoto = (state, action) => {
  const stateUpdate = state.thumbnailList.map(element => {
    let item = { ...element };
    let actionState = !item.active || item.active === false ? true : false;
    if (item.id === action.id) {
      item.active = actionState;
      item.countItem = actionState === false ? 0 : 1;
    }
    return item;
  });

  const counterItem = stateUpdate.filter(element => {
    let item = { ...element };
    return item.active === true;
  });

  return updateObject(state, {
    count: counterItem.length,
    thumbnailList: stateUpdate
  });
};

const showModal = (state, action) => {
  return updateObject(state, {
    isOpen: true
  });
};

const removeSinglePhoto = (state, action) => {
  const stateUpdate = state.thumbnailList.map(element => {
    let item = { ...element };
    if (item.id === action.id) {
      item.active = false;
      item.countItem = 0;
    }
    return item;
  });

  const counterItem = stateUpdate.filter(element => {
    let item = { ...element };
    return item.active === true;
  });

  const openModal = counterItem.length > 0 ? true : false;

  return updateObject(state, {
    thumbnailList: stateUpdate,
    isOpen: openModal,
    count: counterItem.length
  });
};

const incrementPhoto = (state, action) => {
  const stateUpdate = state.thumbnailList.map(element => {
    let item = { ...element };
    if (item.id === action.id) {
      item.countItem = action.countItem + 1;
    }
    return item;
  });

  return updateObject(state, {
    thumbnailList: stateUpdate
  });
};

const decrementPhoto = (state, action) => {
  const stateUpdate = state.thumbnailList.map(element => {
    let item = { ...element };
    if (item.id === action.id) {
      item.countItem =
        action.countItem > 2 ? action.countItem - 1 : (action.countItem = 1);
    }
    return item;
  });

  return updateObject(state, {
    thumbnailList: stateUpdate
  });
};

const fetchDataFailed = (state, action) => {
  return updateObject(state, {
    isLoading: false
  });
};

const getGalleryStart = (state, action) => {
  return updateObject(state, {
    isLoading: true
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_SHOW_BIGPHOTO: return showLargePhoto(state, action);
    case actionTypes.INIT_THUMBNAIL_START: return getGalleryStart(state, action);
    case actionTypes.INIT_THUMBNAIL_LIST: return getGalleryList(state, action);
    case actionTypes.INIT_ACTIVE_PHOTO: return activePhoto(state, action);
    case actionTypes.MODAL_REMOVE_SINGLE_PHOTO: return removeSinglePhoto(state, action);
    case actionTypes.MODAL_SHOW: return showModal(state, action);
    case actionTypes.MODAL_CLOSE: return closeModal(state, action);
    case actionTypes.PHOTO_DECREMENT: return decrementPhoto(state, action);
    case actionTypes.PHOTO_INCREMENT: return incrementPhoto(state, action);
    case actionTypes.FETCH_PHOTO_LIST_FAILED: return fetchDataFailed(state, action);
    default: return state;
  }
};

export default reducer;
