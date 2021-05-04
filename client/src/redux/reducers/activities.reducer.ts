import {
	ActivityType,
	ActivitiesDispatchTypes,
	ACTIVITIES_LOADING,
	ACTIVITIES_SUCCESS,
	ACTIVITIES_FAIL,
} from "../actionTypes/activities.actionTypes";

interface initialStateInterface {
	loading: boolean;
	error: boolean;
	activities: ActivityType[];
}

const initialState: initialStateInterface = {
	loading: false,
	error: false,
	activities: [],
};

const activitiesReducer = (
	state: initialStateInterface = initialState,
	action: ActivitiesDispatchTypes
): initialStateInterface => {
	switch (action.type) {
		case ACTIVITIES_SUCCESS:
			return {
				...state,
				loading: false,
				activities: action.payload,
			};
		case ACTIVITIES_FAIL:
			return {
				...state,
				loading: false,
				error: true,
			};
		case ACTIVITIES_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};

export default activitiesReducer;
