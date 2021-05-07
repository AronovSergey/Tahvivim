import { Dispatch } from "redux";
import axiosInstance from "../../axios/instance";
import { AddressType } from "../actionTypes/activities.actionTypes";

import {
	ActivitiesDispatchTypes,
	ACTIVITIES_LOADING,
	ACTIVITIES_FAIL,
	ACTIVITIES_SUCCESS,
} from "../actionTypes/activities.actionTypes";

/* --------------- Fetch All Activities --------------- */
// extend any library types, by using the typescript decleration merging feature

export const fetchAllActivities = () => async (
	dispatch: Dispatch<ActivitiesDispatchTypes>
) => {
	try {
		dispatch({
			type: ACTIVITIES_LOADING,
		});

		const { data } = await axiosInstance.get("activities", {
			headers: {
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDhmMGJmYjYyZGMwMTVjMjYyODA3MGQiLCJpYXQiOjE2MTk5ODc0NTF9.67USmt5ogkZ-zD-o_3Kme2kEd4ZifxaJhg0PTOLCe0M",
			},
		});

		dispatch({
			type: ACTIVITIES_SUCCESS,
			payload: { activities: data },
		});
	} catch (error) {
		dispatch({ type: ACTIVITIES_FAIL });
	}
};

export const createNewActivity = (
	token: string,
	title: string,
	description: string,
	places: number,
	participants: number,
	address: AddressType
) => async (dispatch: Dispatch<ActivitiesDispatchTypes>) => {
	try {
		dispatch({
			type: ACTIVITIES_LOADING,
		});

		const { data } = await axiosInstance.get("activities", {
			headers: {
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDhmMGJmYjYyZGMwMTVjMjYyODA3MGQiLCJpYXQiOjE2MTk5ODc0NTF9.67USmt5ogkZ-zD-o_3Kme2kEd4ZifxaJhg0PTOLCe0M",
			},
		});

		dispatch({
			type: ACTIVITIES_SUCCESS,
			payload: { activities: data },
		});
	} catch (error) {
		dispatch({ type: ACTIVITIES_FAIL });
	}
};
