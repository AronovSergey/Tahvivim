import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllActivities } from "../../redux/actions/activities.actions";
import { RootStoreType } from "../../redux/store";

const Activities = () => {
	const dispatch = useDispatch();
	const activitiesState = useSelector(
		(state: RootStoreType) => state.activities
	);
	const { activities, loading, error } = activitiesState;

	useEffect(() => {
		dispatch(fetchAllActivities());
	}, [dispatch]);

	return (
		<div>
			{loading && <div>Loading</div>}
			{activities.length > 0 && (
				<div>
					<div>{activities[0].title}</div>
					<div>{activities[1].title}</div>
				</div>
			)}
			{error && <div>Error</div>}
		</div>
	);
};

export default Activities;
