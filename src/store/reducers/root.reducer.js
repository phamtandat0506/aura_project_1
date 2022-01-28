import { combineReducers } from "redux";
import { CartReducer } from "./cart.reducers";
import { ProductReducer } from "./product.reducers";
import { PaymentReducer } from "./payment.reducer";
import { UserReducer } from "./user.reducers";

export const rootReducer = combineReducers({
  product: ProductReducer,
  cart: CartReducer,
  payment: PaymentReducer,
  user: UserReducer,
});
