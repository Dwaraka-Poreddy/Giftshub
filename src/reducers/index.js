import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { editScheduledReducer } from "./EditScheduledComponent";
const rootReducer = combineReducers({
  user: userReducer,
  edit: editScheduledReducer,
});

export default rootReducer;
