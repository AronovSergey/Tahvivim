import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootStoreType } from "../../redux/store";
import { fetchAllActivities } from "../../redux/actions/activities.actions";
import Spinner from "../../UI/Spinner/Spinner";
import DisplayActivities from "./DisplayActivities";

const Activities = () => {
	const dispatch = useDispatch();
	const { activities, loading, searchTerm, category, subcategory } =
		useSelector((state: RootStoreType) => state.activities);

	useEffect(() => {
		dispatch(fetchAllActivities(category, subcategory, searchTerm));
	}, [dispatch, category, subcategory, searchTerm]);

	return (
		<div>
			{loading && <Spinner />}
			{activities.length > 0 && (
				<DisplayActivities activities={activities} />
			)}
		</div>
	);
};

export default Activities;
