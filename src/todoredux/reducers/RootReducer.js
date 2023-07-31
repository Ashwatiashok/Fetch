import {combineReducers} from 'redux';
import TodoReducer from "./TodoReducer";

let rootReducer = combineReducers({
    TodoReducer:TodoReducer
})

export default rootReducer;