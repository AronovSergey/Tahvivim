import { Dispatch } from "redux";
import axiosInstance from "../../axios/instance";
import {
	createUserInstanceInLocalStorge,
	deleteUserInstanceFromLocalStorge,
} from "../../localStorage/localStorage";

import {
	UserDispatchTypes,
	LOGIN_LOADING,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT,
} from "../actionTypes/user.actionTypes";

/* --------------- Login --------------- */
export const login = (email: string, password: string) => async (
	dispatch: Dispatch<UserDispatchTypes>
) => {
	try {
		dispatch({
			type: LOGIN_LOADING,
		});

		const { data } = await axiosInstance.post("/users/login", {
			email,
			password,
		});

		createUserInstanceInLocalStorge(data.token, data.user);

		dispatch({
			type: LOGIN_SUCCESS,
			payload: { user: data.user, token: data.token },
		});
	} catch (error) {
		dispatch({ type: LOGIN_FAIL });
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
