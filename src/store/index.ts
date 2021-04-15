import { createStore } from "redux";
import { ICartState } from "./modules/cart/types";
import rootReducer from "./modules/rootReducer";

export interface IState {
  cart: ICartState;
}

// inicial value
const store = createStore(rootReducer);

export default store;
