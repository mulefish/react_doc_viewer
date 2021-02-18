import { combineReducers } from "redux";
import namesReducer from "./namesReducer";

export default combineReducers({
    names: namesReducer
});
// https://codesandbox.io/s/redux-practice1-bi4ix?file=/src/actions/index.js