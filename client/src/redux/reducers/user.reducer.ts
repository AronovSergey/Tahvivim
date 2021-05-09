import { getUserInstanceFromLocalStorge } from "../../localStorage/localStorage";
import {
	UserType,
	UserDispatchTypes,
	LOGIN_LOADING,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
} from "../actionTypes/user.actionTypes";

interface initialStateInterface {
	user: UserType | {};
	token: string | null;
	loading: boolean;
	error: boolean;
}

let initialState: initialStateInterface = {
	user: {},
	token: null,
	loading: false,
	error: false,
};

const myUser = getUserInstanceFromLocalStorge();

if (myUser) {
	initialState = {
		...initialState,
		user: myUser.user,
		token: myUser.token,
	};
}

const activitiesReducer = (
	state: initialStateInterface = initialState,
	action: UserDispatchTypes
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
		case LOGOUT:
			return {
				...state,
				user: {},
				token: null,
			};
		default:
			return state;
	}
};

export default activitiesReducer;
