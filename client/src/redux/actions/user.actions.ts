import { Dispatch } from "redux";
import axiosInstance from "../../axios/instance";
import {
	createUserInstanceInLocalStorge,
	deleteUserInstanceFromLocalStorge,
} from "../../localStorage/localStorage";
import alert from "../../UI/Alert/alert";
import { SUCCESS, ERROR } from "../../UI/Alert/AlertTypes";

import {
	UserDispatchTypes,
	LOGIN_LOADING,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	SIGNIN_LOADING,
	SIGNIN_FAIL,
	SIGNIN_SUCCESS,
	LOGOUT,
} from "../actionTypes/user.actionTypes";

/* --------------- Login --------------- */
export const login = (
	email: string,
	password: string,
	isCheacked: boolean,
	history: any
) => async (dispatch: Dispatch<UserDispatchTypes>) => {
	try {
		dispatch({
			type: LOGIN_LOADING,
		});

		const { data } = await axiosInstance.post("/users/login", {
			email,
			password,
		});

		if (isCheacked) createUserInstanceInLocalStorge(data.token, data.user);

		dispatch({
			type: LOGIN_SUCCESS,
			payload: { user: data.user, token: data.token },
		});

		alert("You Have Successfully Logged In", SUCCESS);

		history.push("/");
	} catch (error) {
		dispatch({ type: LOGIN_FAIL });
		alert("Wrong Username Or Password", ERROR);
	}
};

/* --------------- Signin --------------- */
export const signin = (
	name: string,
	email: string,
	password: string,
	history: any
) => async (dispatch: Dispatch<UserDispatchTypes>) => {
	try {
		dispatch({
			type: SIGNIN_LOADING,
		});

		const { data } = await axiosInstance.post("/users/signin", {
			email,
			password,
			name,
		});

		createUserInstanceInLocalStorge(data.token, data.user);

		dispatch({
			type: SIGNIN_SUCCESS,
			payload: { user: data.user, token: data.token },
		});

		alert("You Have Successfully Signed Up", SUCCESS);

		history.push("/");
	} catch (error) {
		alert(error.response.data, ERROR);
		dispatch({ type: SIGNIN_FAIL });
	}
};

/* --------------- Logout --------------- */
export const logout = () => async (dispatch: Dispatch<UserDispatchTypes>) => {
	try {
		deleteUserInstanceFromLocalStorge();
		dispatch({
			type: LOGOUT,
		});
	} catch (error) {
		dispatch({ type: LOGIN_FAIL });
	}
};
