import storeReducer from "./storeItems";
import cartReducer from "./cartItems";
import { combineReducers } from "redux";

const combinedReducers = combineReducers({
    storeItems: storeReducer,
    cartItems: cartReducer
});

export default combinedReducers;