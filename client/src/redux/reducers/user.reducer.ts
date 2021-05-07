import {
	UserType,
	LoginDispatchTypes,
	LOGIN_LOADING,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
} from "../actionTypes/user.actionTypes";

interface initialStateInterface {
	user: UserType | {};
	token: string;
	loading: boolean;
	error: boolean;
}

const initialState: initialStateInterface = {
	user: {},
	token: "",
	loading: false,
	error: false,
};

const activitiesReducer = (
	state: initialStateInterface = initialState,
	action: LoginDispatchTypes
): initialStateInterface => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				user: action.payload.user,
				token: action.payload.token,
			};
		case LOGIN_FAIL:
			return {
				...state,
				loading: false,
				error: true,
			};
		case LOGIN_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};

export default activitiesReducer;
