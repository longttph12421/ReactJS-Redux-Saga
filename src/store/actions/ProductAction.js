import constants from '../../configures/constants';
import * as api from '../../services/ProductService';

export const getListProduct = (cate) => {
  return {
    type: constants.GET_ALL_PRODUCT,
    payload: {
      cate,
    },
  };
};

export const getListProductSuccess = (data) => {
  return {
    type: constants.GET_ALL_PRODUCT_SUCCESS,
    payload: {
      data,
    },
  };
};

export const getListProductFailed = (error) => {
  return {
    type: constants.GET_ALL_PRODUCT_FAILED,
    payload: {
      error,
    },
  };
};
export const searchProduct = (params) => {
  return {
    type: constants.SEARCH.SEARCH_PRODUCT,
    payload: {
      params,
    },
  };
};
export const searchProductSuccess = (data) => {
  return {
    type: constants.SEARCH.SEARCH_PRODUCT_SUCCESS,
    payload: {
      data,
    },
  };
};
export const searchProductFailed = (error) => {
  return {
    type: constants.SEARCH.SEARCH_PRODUCT_FAILED,
    payload: {
      error,
    },
  };
};
export const addProduct = (data) => {
  return {
    type: constants.ADD_PRODUCT,
    payload: data,
  };
};

export const addProductSuccess = (data) => {
  return {
    type: constants.ADD_PRODUCT_SUCCESS,
    payload: {
      data,
    },
  };
};

export const addProductFailed = (error) => {
  return {
    type: constants.ADD_PRODUCT_FAILED,
    payload: {
      error,
    },
  };
};
export const updateProduct = (data) => {
  return {
    type: constants.UPDATE_PRODUCT,
    payload: data,
  };
};
export const setEditData = (data) => {
  return {
    type: constants.SET_EDIT_DATA,
    payload: {
      data,
    },
  };
};
export const updateProductSuccess = (data) => {
  return {
    type: constants.UPDATE_PRODUCT_SUCCESS,
    payload: {
      data,
    },
  };
};

export const updateProductFailed = (error) => {
  return {
    type: constants.UPDATE_PRODUCT_FAILED,
    payload: {
      error,
    },
  };
};
export const deleteProduct = (data) => {
  return {
    type: constants.DELETE_PRODUCT,
    payload: data,
  };
};

export const deleteProductSuccess = (data) => {
  return {
    type: constants.DELETE_PRODUCT_SUCCESS,
    payload: {
      data,
    },
  };
};

export const deleteProductFailed = (error) => {
  return {
    type: constants.DELETE_PRODUCT_FAILED,
    payload: {
      error,
    },
  };
};
