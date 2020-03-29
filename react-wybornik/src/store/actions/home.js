import * as actionTypes from "./actionTypes";

export const showLargePhoto = photo => {
  return {
    type: actionTypes.INIT_SHOW_BIGPHOTO,
    largePhoto: photo
  };
};

export const getGalleryList = data => {
  return {
    type: actionTypes.INIT_THUMBNAIL_LIST,
    thumbnailList: data
  };
};

export const activePhoto = id => {
  return {
    type: actionTypes.INIT_ACTIVE_PHOTO,
    id: id
  };
};

export const showModal = () => {
  return {
    type: actionTypes.MODAL_SHOW
  };
};

export const closeModal = () => {
  return {
    type: actionTypes.MODAL_CLOSE
  };
};

export const removeSinglePhoto = value => {
  return {
    type: actionTypes.MODAL_REMOVE_SINGLE_PHOTO,
    id: value
  };
};

export const incrementPhoto = (value, countItem) => {
  return {
    type: actionTypes.PHOTO_INCREMENT,
    id: value,
    countItem: countItem
  };
};

export const decrementPhoto = (value, countItem) => {
  return {
    type: actionTypes.PHOTO_DECREMENT,
    id: value,
    countItem: countItem
  };
};

export const fetchDataFailed = error => {
  return {
    type: actionTypes.FETCH_PHOTO_LIST_FAILED,
    error: error
  };
};

export const getGalleryStart = () => {
  return {
    type: actionTypes.INIT_THUMBNAIL_START
  };
};

export const initPhoto = pathurl => {
  return dispatch => {
    dispatch(getGalleryStart());

    let url =
      process.env.NODE_ENV === "development"
        ? `http://localhost:3004/images`
        : `${process.env.REACT_APP_JSON}/?${pathurl}`;

    // let url = `${process.env.REACT_APP_JSON}/?${pathurl}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch(getGalleryList(data));
      })
      .catch(error => {
        dispatch(fetchDataFailed(false));
      });
  };
};
