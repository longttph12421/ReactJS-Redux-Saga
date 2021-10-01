import constants from "../../configures/constants";

export const showLoading = () => ({
  type: constants.LOADING.SHOW_LOADING,
});
export const hideLoading = () => ({
  type: constants.LOADING.HIDE_LOADING,
});
export const openModal = () => ({
  type: constants.MODAL.OPEN_MODAL,
});
export const closeModel = () => ({
  type: constants.MODAL.CLOSE_MODAL,
});
export const changeModalTitle = (title) => ({
  type: constants.MODAL.CHANGE_MODAL_TITLE,
  payload: {
    title,
  },
});
export const changeModalContent = (component) => ({
  type: constants.MODAL.CHANGE_MODAL_CONTENT,
  payload: {
    component,
  },
});
