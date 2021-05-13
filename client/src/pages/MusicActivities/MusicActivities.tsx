import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Activities from "../../components/activities/Activities";
import { updateSearchParams } from "../../redux/actions/activities.actions";

const MusicActivities = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(updateSearchParams("Music", undefined, ""));
	}, [dispatch]);
	return (
		<div>
			<h1>
				<span className="primary-font">Music</span> Activities :
			</h1>
			<Activities />
		</div>
	);
};

export default MusicActivities;
