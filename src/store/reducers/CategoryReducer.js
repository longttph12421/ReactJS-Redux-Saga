import constants from '../../configures/constants';

const initialState = {
  CategoryList: [],
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.CATEGORY.GET_ALL_CATEGORY: {
      return {
        ...state,
        CategoryList: [],
      };
    }
    case constants.CATEGORY.GET_ALL_CATEGORY_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        CategoryList: data,
      };
    }
    case constants.CATEGORY.GET_ALL_CATEGORY_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};
export default CategoryReducer;
