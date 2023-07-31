import { legacy_createStore } from "redux";
import rootReducer from "./reducers/RootReducer";

let store = legacy_createStore(rootReducer)

export default store;