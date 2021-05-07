import { Dispatch } from "redux";
import axiosInstance from "../../axios/instance";

import {
	LoginDispatchTypes,
	LOGIN_LOADING,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
} from "../actionTypes/user.actionTypes";

/* --------------- Login --------------- */
export const login = (email: string, password: string) => async (
	dispatch: Dispatch<LoginDispatchTypes>
) => {
	try {
		dispatch({
			type: LOGIN_LOADING,
		});

		const { data } = await axiosInstance.post("/users/login", {
			email,
			password,
		});

		dispatch({
			type: LOGIN_SUCCESS,
			payload: { user: data.user, token: data.token },
		});
	} catch (error) {
		dispatch({ type: LOGIN_FAIL });
	}
};
