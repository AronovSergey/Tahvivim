import { combineReducers } from "redux";
import activitiesReducer from "./activities.reducer";
import userReducer from "./user.reducer";

const RootReducer = combineReducers({
	activities: activitiesReducer,
	user: userReducer,
});

export default RootReducer;
