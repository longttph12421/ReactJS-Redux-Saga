import constants from '../../configures/constants';

const initialState = {
  showLoading: false,
  openModal: false,
  title: '',
  component: null,
};

const UiReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.LOADING.SHOW_LOADING: {
      return {
        ...state,
        showLoading: true,
      };
    }
    case constants.LOADING.HIDE_LOADING: {
      return {
        ...state,
        showLoading: false,
      };
    }
    case constants.MODAL.OPEN_MODAL: {
      return {
        ...state,
        openModal: true,
      };
    }
    case constants.MODAL.CLOSE_MODAL: {
      return {
        ...state,
        openModal: false,
      };
    }
    case constants.MODAL.CHANGE_MODAL_TITLE: {
      const { title } = action.payload;
      return {
        ...state,
        title: title,
      };
    }
    case constants.MODAL.CHANGE_MODAL_CONTENT: {
      const { component } = action.payload;
      return {
        ...state,
        component: component,
      };
    }

    default:
      return state;
  }
};
export default UiReducer;
