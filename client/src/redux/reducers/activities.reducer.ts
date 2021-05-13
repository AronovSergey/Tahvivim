import {
	ActivityType,
	ActivitiesDispatchTypes,
	ACTIVITIES_LOADING,
	ACTIVITIES_SUCCESS,
	ACTIVITIES_FAIL,
	UPDATE_SEARCH_PARAMS,
} from "../actionTypes/activities.actionTypes";

interface initialStateInterface {
	loading: boolean;
	error: boolean;
	activities: ActivityType[];
	searchTerm: string | undefined;
	category: string | undefined;
	subcategory: string | undefined;
}

const initialState: initialStateInterface = {
	loading: false,
	error: false,
	activities: [],
	searchTerm: "",
	category: "",
	subcategory: "",
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
				activities: action.payload.activities,
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
		case UPDATE_SEARCH_PARAMS:
			return {
				...state,
				searchTerm: action.payload.searchTerm,
				category: action.payload.category,
				subcategory: action.payload.subcategory,
			};
		default:
			return state;
	}
};

export default activitiesReducer;
