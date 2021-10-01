import constants from '../../configures/constants';
import { toastError, toastSuccess } from '../../common/toastHelper';
const initialState = {
  ProductList: [],
  EditData: {},
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_ALL_PRODUCT: {
      return {
        ...state,
        ProductList: [],
      };
    }
    case constants.GET_ALL_PRODUCT_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        ProductList: data,
      };
    }
    case constants.GET_ALL_PRODUCT_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    case constants.SEARCH.SEARCH_PRODUCT: {
      const { params } = action.payload;
      return {
        ...state,
        params,
      };
    }
    case constants.SEARCH.SEARCH_PRODUCT_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        ProductList: [],
        ProductList: data,
      };
    }
    case constants.SEARCH.SEARCH_PRODUCT_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    case constants.ADD_PRODUCT: {
      return {
        ...state,
      };
    }
    case constants.ADD_PRODUCT_SUCCESS: {
      toastSuccess('SUCCESSFULLY ADD NEW');
      const { data } = action.payload;
      return {
        ...state,
        ProductList: [data].concat(state.ProductList),
      };
    }
    case constants.ADD_PRODUCT_FAILED: {
      toastError(error);
      const { error } = action.payload;
      return {
        ...state,
      };
    }
    case constants.SET_EDIT_DATA: {
      const { data } = action.payload;
      return {
        ...state,
        EditData: data,
      };
    }
    case constants.UPDATE_PRODUCT: {
      return {
        ...state,
      };
    }

    case constants.UPDATE_PRODUCT_SUCCESS: {
      const { data } = action.payload;
      const { ProductList } = state;
      const newList = ProductList.map((value, index) => {
        key = { index };
        if (value.id === data.id) {
          return data;
        } else {
          return value;
        }
      });
      toastSuccess('UPDATE SUCCESSFULLY');
      return {
        ...state,
        ProductList: newList,
      };
    }
    case constants.UPDATE_PRODUCT_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    case constants.DELETE_PRODUCT: {
      return {
        ...state,
      };
    }

    case constants.DELETE_PRODUCT_SUCCESS: {
      const { data } = action.payload;
      toastSuccess('SUCCESSFULLY');
      return {
        ...state,
        ProductList: state.ProductList.filter((item) => item.id !== data.id),
      };
    }
    case constants.DELETE_PRODUCT_FAILED: {
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
export default ProductReducer;
