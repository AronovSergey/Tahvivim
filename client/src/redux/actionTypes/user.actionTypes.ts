export const LOGIN_USER_REDUCER = "LOGIN_USER_REDUCER";
export const FAIL_USER_REDUCER = "FAIL_USER_REDUCER";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const LOGOUT = "LOGOUT";
export const GET_USER_IMAGE = "GET_USER_IMAGE";

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

export interface GetUserImage {
	type: typeof GET_USER_IMAGE;
}

export type UserDispatchTypes =
	| LoginUserReducer
	| FailUserReducer
	| LoginSuccess
	| SigninSuccess
	| Logout
	| GetUserImage;
