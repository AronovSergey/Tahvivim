import { Dispatch } from "redux";
import axiosInstance from "../../axios/instance";
import { AddressType } from "../actionTypes/activities.actionTypes";
import alert from "../../UI/Alert/alert";
import { ERROR } from "../../UI/Alert/AlertTypes";

import {
	ActivitiesDispatchTypes,
	ACTIVITIES_LOADING,
	ACTIVITIES_FAIL,
	ACTIVITIES_SUCCESS,
} from "../actionTypes/activities.actionTypes";

/* --------------- Fetch All Activities --------------- */
// extend any library types, by using the typescript decleration merging feature

export const fetchAllActivities =
	(token: string) => async (dispatch: Dispatch<ActivitiesDispatchTypes>) => {
		try {
			dispatch({
				type: ACTIVITIES_LOADING,
			});

			const { data } = await axiosInstance.get("activities");

			dispatch({
				type: ACTIVITIES_SUCCESS,
				payload: { activities: data },
			});
		} catch (error) {
			dispatch({ type: ACTIVITIES_FAIL });
			alert("Something has gone wrong", ERROR);
		}
	};

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
			console.log(token);

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

			console.log(data);

			dispatch({
				type: ACTIVITIES_SUCCESS,
				payload: { activities: data },
			});
		} catch (error) {
			dispatch({ type: ACTIVITIES_FAIL });
		}
	};
