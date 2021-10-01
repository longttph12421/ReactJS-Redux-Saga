import {
  fork,
  take,
  call,
  put,
  delay,
  takeLatest,
  select,
  takeEvery,
} from 'redux-saga/effects';
import constants from '../configures/constants';
import * as UI from '../store/actions/UI';
import * as ProductService from '../services/ProductService';
import * as CategoryService from '../services/categoryService';
import * as ProductAction from '../store/actions/ProductAction';
import * as CategoryAction from '../store/actions/CategoryAction';

function* getCategory() {
  while (true) {
    yield take(constants.CATEGORY.GET_ALL_CATEGORY);
    yield put(UI.showLoading());
    const response = yield call(CategoryService.getList);
    const { status, data } = response;
    if (status === constants.STATUS.SUCCESS) {
      yield put(CategoryAction.getCategorySuccess(data));
    } else {
      yield put(CategoryAction.getCategoryFailed(data));
    }
    yield delay(1000);
    yield put(UI.hideLoading());
  }
}
function* getProduct({ payload }) {
  yield put(UI.showLoading());
  const response = yield call(ProductService.getList, payload);
  const { status, data } = response;
  if (status === constants.STATUS.SUCCESS) {
    yield put(ProductAction.getListProductSuccess(data));
  } else {
    yield put(ProductAction.getListProductFailed(data));
  }
  yield delay(500);
  yield put(UI.hideLoading());
}
function* whatSearch({ payload }) {
  yield delay(500);
  const { params } = payload;
  const response = yield call(ProductService.Search, params);
  const { status, data } = response;
  if (status === constants.STATUS.SUCCESS) {
    yield put(ProductAction.searchProductSuccess(data));
  } else {
    yield put(ProductAction.searchProductFailed(data));
  }
  yield delay(1500);
  yield put(UI.hideLoading());
}
function* addProduct({ payload }) {
  yield put(UI.showLoading());
  const response = yield call(ProductService.addProduct, payload);
  const { status, data } = response;
  if (status === constants.STATUS.CREATED) {
    yield put(UI.closeModel());
    yield put(ProductAction.addProductSuccess(data));
  } else {
    yield put(ProductAction.addProductFailed(data));
  }
  yield delay(1500);
  yield put(UI.hideLoading());
}
function* UpdateProduct({ payload }) {
  yield put(UI.showLoading());
  const response = yield call(ProductService.updateProduct, payload);
  const { status, data } = response;
  if (status === constants.STATUS.SUCCESS) {
    yield put(UI.closeModel());
    yield put(ProductAction.updateProductSuccess(data));
  } else {
    yield put(ProductAction.updateProductFailed(data));
  }
  yield delay(1500);
  yield put(UI.hideLoading());
}
function* deleteProduct({ payload }) {
  yield put(UI.showLoading());
  const response = yield call(ProductService.deleteProduct, payload);
  const { status, data } = response;
  if (status === constants.STATUS.SUCCESS) {
    yield put(UI.closeModel());
    yield put(ProductAction.deleteProductSuccess(data));
  } else {
    yield put(ProductAction.deleteProductFailed(data));
  }
  yield delay(500);
  yield put(UI.hideLoading());
}
function* rootSaga() {
  yield fork(getCategory);
  yield takeEvery(constants.GET_ALL_PRODUCT, getProduct);
  yield takeLatest(constants.SEARCH.SEARCH_PRODUCT, whatSearch);
  yield takeEvery(constants.ADD_PRODUCT, addProduct);
  yield takeEvery(constants.UPDATE_PRODUCT, UpdateProduct);
  yield takeLatest(constants.DELETE_PRODUCT, deleteProduct);
}
export default rootSaga;
