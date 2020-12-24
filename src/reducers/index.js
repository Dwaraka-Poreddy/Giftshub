import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { editScheduledReducer } from "./EditScheduledComponent";
import { activestepReducer } from "./ActiveStep";
const rootReducer = combineReducers({
  user: userReducer,
  edit: editScheduledReducer,
  daystep: activestepReducer,
});

export default rootReducer;
