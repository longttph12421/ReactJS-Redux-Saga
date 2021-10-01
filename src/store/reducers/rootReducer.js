import { combineReducers } from 'redux';
import ProductReducer from './ProductReducer';
import UiReducer from './UiReducer';
import CategoryReducer from './CategoryReducer';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
  product: ProductReducer,
  ui: UiReducer,
  category: CategoryReducer,
  form: formReducer,
});

export default rootReducer;
