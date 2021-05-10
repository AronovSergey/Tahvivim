import { getUserInstanceFromLocalStorge } from "../../localStorage/localStorage";
import {
	UserType,
	UserDispatchTypes,
	LOGIN_USER_REDUCER,
	FAIL_USER_REDUCER,
	LOGIN_SUCCESS,
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
		_id: "",
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
		case FAIL_USER_REDUCER:
			return {
				...state,
				loading: false,
				error: true,
			};
		case LOGIN_USER_REDUCER:
			return {
				...state,
				loading: true,
			};
		case LOGOUT:
			return {
				...state,
				user: {
					_id: "",
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
