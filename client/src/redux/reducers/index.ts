import { combineReducers } from "redux";
import activitiesReducer from "./activities.reducer";

const RootReducer = combineReducers({
	activities: activitiesReducer,
});

export default RootReducer;
