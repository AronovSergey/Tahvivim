import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Activities from "../../components/activities/Activities";
import { updateSearchParams } from "../../redux/actions/activities.actions";

const GamesActivities = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(
			updateSearchParams("Games And Other Activities", undefined, "")
		);
	}, [dispatch]);
	return (
		<div>
			<h1>
				<span className="primary-font">Games And Other</span> Activities
				:
			</h1>
			<Activities />
		</div>
	);
};

export default GamesActivities;
