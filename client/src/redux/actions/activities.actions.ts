import { Dispatch } from "redux";
import axiosInstance from "../../axios/instance";
import { AddressType } from "../actionTypes/activities.actionTypes";
import alert from "../../UI/Alert/alert";
import { ERROR, SUCCESS } from "../../UI/Alert/AlertTypes";

import {
	ActivitiesDispatchTypes,
	ACTIVITIES_LOADING,
	ACTIVITIES_FAIL,
	ACTIVITIES_SUCCESS,
	UPDATE_SEARCH_PARAMS,
	ACTIVITIES_UPDATE_SUCCESS,
} from "../actionTypes/activities.actionTypes";

/* --------------- Fetch All Activities --------------- */
export const fetchAllActivities =
	(
		category: string | undefined,
		subcategory: string | undefined,
		searchTerm: string | undefined
	) =>
	async (dispatch: Dispatch<ActivitiesDispatchTypes>) => {
		try {
			dispatch({
				type: ACTIVITIES_LOADING,
			});

			const { data } = await axiosInstance.get(
				`activities?term=${searchTerm}&category=${category}&subcategory=${subcategory}`
			);

			dispatch({
				type: ACTIVITIES_SUCCESS,
				payload: { activities: data },
			});
		} catch (error) {
			dispatch({ type: ACTIVITIES_FAIL });
			alert("Something has gone wrong", ERROR);
		}
	};

/* --------------- Post New Activity --------------- */
export const createNewActivity =
	(
		token: string,
		title: string,
		category: string | undefined,
		subcategory: string | undefined,
		description: string,
		places: number,
		address: AddressType
	) =>
	async (dispatch: Dispatch<ActivitiesDispatchTypes>) => {
		try {
			dispatch({
				type: ACTIVITIES_LOADING,
			});

			const { data } = await axiosInstance.post(
				"activities",
				{
					title,
					category,
					subcategory,
					description,
					places,
					address,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			dispatch({
				type: ACTIVITIES_SUCCESS,
				payload: { activities: data },
			});
			alert("Activiy has successfully created", SUCCESS);
		} catch (error) {
			alert("Something has gone wrong", ERROR);
			dispatch({ type: ACTIVITIES_FAIL });
		}
	};

/* --------------- Update Search Params --------------- */
export const updateSearchParams =
	(
		category: string | undefined,
		subcategory: string | undefined,
		searchTerm: string | undefined
	) =>
	async (dispatch: Dispatch<ActivitiesDispatchTypes>) => {
		try {
			dispatch({
				type: UPDATE_SEARCH_PARAMS,
				payload: { category, subcategory, searchTerm },
			});
		} catch (error) {
			dispatch({ type: ACTIVITIES_FAIL });
		}
	};

/* --------------- Update Activity --------------- */
export const updateActivity =
	(_id: string, data: {}) =>
	async (dispatch: Dispatch<ActivitiesDispatchTypes>) => {
		try {
			dispatch({
				type: ACTIVITIES_LOADING,
			});

			const response = await axiosInstance.put(`activities/${_id}`, data);

			dispatch({
				type: ACTIVITIES_UPDATE_SUCCESS,
				payload: { activity: response.data },
			});
		} catch (error) {
			dispatch({ type: ACTIVITIES_FAIL });
		}
	};
