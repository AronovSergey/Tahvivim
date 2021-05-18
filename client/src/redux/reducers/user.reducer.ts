import { getUserInstanceFromLocalStorge } from "../../localStorage/localStorage";
import {
	UserType,
	UserDispatchTypes,
	LOGIN_USER_REDUCER,
	FAIL_USER_REDUCER,
	LOGIN_SUCCESS,
	SIGNIN_SUCCESS,
	LOGOUT,
	POST_USER_IMAGE,
	UPDATE_USER_PROFILE,
	ADD_TO_FAVORITE,
	REMOVE_FROM_FAVORITE,
} from "../actionTypes/user.actionTypes";

interface initialStateInterface {
	user: UserType;
	token: string;
	loading: boolean;
	error: boolean;
}

let initialState: initialStateInterface = {
	user: {
		_id: "",
		name: "",
		email: "",
		favorites: [],
	},
	token: "",
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
					favorites: [],
				},
				token: "",
			};
		case POST_USER_IMAGE:
			return {
				...state,
				loading: false,
			};
		case UPDATE_USER_PROFILE:
		case REMOVE_FROM_FAVORITE:
		case ADD_TO_FAVORITE:
			return {
				...state,
				user: action.payload.user,
				loading: false,
			};
		default:
			return state;
	}
};

export default activitiesReducer;
