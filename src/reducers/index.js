import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ProductReducer from "./ProductReducer";
import OrderReducer from "./OrderReducer";

const rootReducer = combineReducers({
  orders: OrderReducer,
  products: ProductReducer,
  form: formReducer,
});

export default rootReducer;
