import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootStoreType } from "../../redux/store";
import TableRow from "../../components/tableRow/TableRow";
import { fetchAllActivities } from "../../redux/actions/activities.actions";
import Spinner from "../../UI/Spinner/Spinner";

const Activities = () => {
	const dispatch = useDispatch();
	const { activities, loading, searchTerm, category, subcategory } =
		useSelector((state: RootStoreType) => state.activities);
	const { token } = useSelector((state: RootStoreType) => state.user);

	useEffect(() => {
		if (token)
			dispatch(fetchAllActivities(category, subcategory, searchTerm));
	}, [token, dispatch, category, subcategory, searchTerm]);

	return (
		<div>
			{loading && <Spinner />}
			{activities.length > 0 && (
				<div>
					{activities.map((activity) => (
						<TableRow
							owner={activity.owner}
							key={activity._id}
							title={activity.title}
							description={activity.description}
							places={activity.places}
							participants={activity.participants}
							createdAt={activity.createdAt}
							address={activity.address}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Activities;
