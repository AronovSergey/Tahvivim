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
	UserType,
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

/* --------------- Login --------------- */
export const login =
	(email: string, password: string, isCheacked: boolean, history: any) =>
	async (dispatch: Dispatch<UserDispatchTypes>) => {
		try {
			dispatch({
				type: LOGIN_USER_REDUCER,
			});

			const { data } = await axiosInstance.post("/users/login", {
				email,
				password,
			});

			if (isCheacked)
				createUserInstanceInLocalStorge(data.token, data.user);

			dispatch({
				type: LOGIN_SUCCESS,
				payload: { user: data.user, token: data.token },
			});

			alert("You Have Successfully Logged In", SUCCESS);

			history.push("/");
		} catch (error) {
			dispatch({ type: FAIL_USER_REDUCER });
			alert("Wrong Username Or Password", ERROR);
		}
	};

/* --------------- Signin --------------- */
export const signin =
	(name: string, email: string, password: string, history: any) =>
	async (dispatch: Dispatch<UserDispatchTypes>) => {
		try {
			dispatch({
				type: LOGIN_USER_REDUCER,
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
			dispatch({ type: FAIL_USER_REDUCER });
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
		dispatch({ type: FAIL_USER_REDUCER });
	}
};

/* --------------- Post User Profile Image --------------- */
export const postUserProfileImage =
	(token: string, formData: any, history: any) =>
	async (dispatch: Dispatch<UserDispatchTypes>) => {
		try {
			dispatch({
				type: LOGIN_USER_REDUCER,
			});

			const { data } = await axiosInstance.post(
				`/users/avatar`,
				formData,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			dispatch({
				type: POST_USER_IMAGE,
			});

			alert(data, SUCCESS);
		} catch (error) {
			dispatch({ type: FAIL_USER_REDUCER });
		}
	};

/* --------------- Update User Profile  --------------- */
export const updateUserProfile =
	(token: string, name: string, age: string | number, email: string) =>
	async (dispatch: Dispatch<UserDispatchTypes>) => {
		try {
			dispatch({
				type: LOGIN_USER_REDUCER,
			});

			const { data }: { data: UserType } = await axiosInstance.put(
				`/users`,
				{
					name,
					age,
					email,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			dispatch({
				type: UPDATE_USER_PROFILE,
				payload: { user: data },
			});

			createUserInstanceInLocalStorge(token, data);
		} catch (error) {
			dispatch({ type: FAIL_USER_REDUCER });
		}
	};

/* --------------- Like a post  --------------- */
export const addToFavorites =
	(token: string, id: string) =>
	async (dispatch: Dispatch<UserDispatchTypes>) => {
		try {
			const { data }: { data: UserType } = await axiosInstance.post(
				`/users/favorites`,
				{ id },
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			dispatch({
				type: ADD_TO_FAVORITE,
				payload: { user: data },
			});

			createUserInstanceInLocalStorge(token, data);
		} catch (error) {
			alert("Somthing gone wrong", ERROR);
		}
	};

/* --------------- Like a post  --------------- */
export const removeFromFavorites =
	(token: string, id: string) =>
	async (dispatch: Dispatch<UserDispatchTypes>) => {
		try {
			const { data }: { data: UserType } = await axiosInstance.delete(
				`/users/favorites`,
				{
					data: { id },
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			dispatch({
				type: REMOVE_FROM_FAVORITE,
				payload: { user: data },
			});

			createUserInstanceInLocalStorge(token, data);
		} catch (error) {
			alert("Somthing gone wrong", ERROR);
		}
	};
