import { Dispatch } from "redux";
import axiosInstance from "../../axios/instance";
import { AddressType } from "../actionTypes/activities.actionTypes";
import alert from "../../UI/Alert/alert";
import { ERROR } from "../../UI/Alert/AlertTypes";

import {
	ActivitiesDispatchTypes,
	ActivityType,
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
		description: string,
		places: number,
		participants: number,
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
					description,
					places,
					participants,
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
		} catch (error) {
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
	(_id: string | undefined, data: ActivityType) =>
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
