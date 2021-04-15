import { createStore } from "redux";
import rootReducer from "./modules/rootReducer";

// inicial value
const store = createStore(rootReducer);

export default store;
