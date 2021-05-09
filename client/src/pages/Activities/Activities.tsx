import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllActivities } from "../../redux/actions/activities.actions";
import { RootStoreType } from "../../redux/store";

const Activities = () => {
	const dispatch = useDispatch();
	const { activities, loading, error } = useSelector(
		(state: RootStoreType) => state.activities
	);
	const { token } = useSelector((state: RootStoreType) => state.user);

	useEffect(() => {
		if (token) dispatch(fetchAllActivities(token));
	}, [token, dispatch]);

	return (
		<div>
			{loading && <div>Loading</div>}
			{activities.length > 0 && (
				<div>
					{activities.map((activity) => (
						<div>{activity.title}</div>
					))}
				</div>
			)}
			{error && <div>Error</div>}
		</div>
	);
};

export default Activities;
