import { getUserInstanceFromLocalStorge } from "../../localStorage/localStorage";
import {
	UserType,
	UserDispatchTypes,
	LOGIN_LOADING,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	SIGNIN_LOADING,
	SIGNIN_FAIL,
	SIGNIN_SUCCESS,
	LOGOUT,
} from "../actionTypes/user.actionTypes";

interface initialStateInterface {
	user: UserType;
	token: string | null;
	loading: boolean;
	error: boolean;
}

let initialState: initialStateInterface = {
	user: {
		name: "",
		email: "",
	},
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
		case SIGNIN_SUCCESS:
			return {
				...state,
				loading: false,
				user: action.payload.user,
				token: action.payload.token,
			};
		case LOGIN_FAIL:
		case SIGNIN_FAIL:
			return {
				...state,
				loading: false,
				error: true,
			};
		case LOGIN_LOADING:
		case SIGNIN_LOADING:
			return {
				...state,
				loading: true,
			};
		case LOGOUT:
			return {
				...state,
				user: {
					name: "",
					email: "",
				},
				token: null,
			};
		default:
			return state;
	}
};

export default activitiesReducer;
