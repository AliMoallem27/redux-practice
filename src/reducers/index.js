import { combineReducers } from "redux";
import cartReducer from "./cart";
import productsReducer from "./products";

export default combineReducers({
  cartReducer,
  productsReducer,
});
