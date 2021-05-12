export const LOGIN_USER_REDUCER = "LOGIN_USER_REDUCER";
export const FAIL_USER_REDUCER = "FAIL_USER_REDUCER";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const LOGOUT = "LOGOUT";
export const POST_USER_IMAGE = "POST_USER_IMAGE";
export const UPDATE_USER_PROFILE = "UPDATE_USER_PROFILE";

export type UserType = {
	_id: string;
	name: string;
	email: string;
	avatar?: string;
};

export interface LoginUserReducer {
	type: typeof LOGIN_USER_REDUCER;
}

export interface FailUserReducer {
	type: typeof FAIL_USER_REDUCER;
}

export interface LoginSuccess {
	type: typeof LOGIN_SUCCESS;
	payload: { user: UserType; token: string };
}

export interface SigninSuccess {
	type: typeof SIGNIN_SUCCESS;
	payload: { user: UserType; token: string };
}

export interface Logout {
	type: typeof LOGOUT;
}

export interface PostUserImage {
	type: typeof POST_USER_IMAGE;
}

export interface UpdateUserProfile {
	type: typeof UPDATE_USER_PROFILE;
	payload: { user: UserType };
}

export type UserDispatchTypes =
	| LoginUserReducer
	| FailUserReducer
	| LoginSuccess
	| SigninSuccess
	| Logout
	| PostUserImage
	| UpdateUserProfile;
