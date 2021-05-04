import { Dispatch } from "redux";
import axios from "axios";

import {
	ActivitiesDispatchTypes,
	ACTIVITIES_LOADING,
	ACTIVITIES_FAIL,
	ACTIVITIES_SUCCESS,
} from "../actionTypes/activities.actionTypes";

/* --------------- Fetch All Activities --------------- */
export const fetchAllActivities = () => async (
	dispatch: Dispatch<ActivitiesDispatchTypes>
) => {
	try {
		dispatch({
			type: ACTIVITIES_LOADING,
		});

		const { data } = await axios.get("api/activities", {
			headers: {
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDhmMGJmYjYyZGMwMTVjMjYyODA3MGQiLCJpYXQiOjE2MTk5ODc0NTF9.67USmt5ogkZ-zD-o_3Kme2kEd4ZifxaJhg0PTOLCe0M",
			},
		});

		console.log(data);

		dispatch({
			type: ACTIVITIES_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({ type: ACTIVITIES_FAIL });
	}
};
