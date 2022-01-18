import { combineReducers } from 'redux';
import { CartReducer } from './cart.reducers';
import { ProductReducer } from './product.reducers';


export const rootReducer = combineReducers({
  product: ProductReducer,
  cart: CartReducer
});
