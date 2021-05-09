export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export type UserType = {
	_id: string;
	name: string;
	email: string;
	avatar?: string;
};

export interface LoginLoading {
	type: typeof LOGIN_LOADING;
}

export interface LoginFail {
	type: typeof LOGIN_FAIL;
}

export interface LoginSuccess {
	type: typeof LOGIN_SUCCESS;
	payload: { user: UserType; token: string };
}

export interface Logout {
	type: typeof LOGOUT;
}

export type UserDispatchTypes =
	| LoginLoading
	| LoginFail
	| LoginSuccess
	| Logout;
