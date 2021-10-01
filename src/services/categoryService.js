import axiosHelper from '../common/axiosHelper';
import constants from '../configures/constants';

const url = 'category';

export const getList = () => {
  return axiosHelper.get(`${constants.API_URL}/${url}`);
};
