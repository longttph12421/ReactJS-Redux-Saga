import constants from '../../configures/constants';

export const getListCategory = () => {
  return {
    type: constants.CATEGORY.GET_ALL_CATEGORY,
  };
};

export const getCategorySuccess = (data) => {
  return {
    type: constants.CATEGORY.GET_ALL_CATEGORY_SUCCESS,
    payload: {
      data,
    },
  };
};

export const getCategoryFailed = (error) => {
  return {
    type: constants.CATEGORY.GET_ALL_CATEGORY_FAILED,
    payload: {
      error,
    },
  };
};
