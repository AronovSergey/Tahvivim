import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Activities from "../../components/activities/Activities";
import { updateSearchParams } from "../../redux/actions/activities.actions";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";

const GamesActivities = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(
			updateSearchParams("Games And Other Activities", undefined, "")
		);
	}, [dispatch]);
	return (
		<div>
			<div className="title">
				<SportsEsportsIcon fontSize="large" color="secondary" />
				<span className="primary-font">Games And Other</span> Activities
				:
				<SportsEsportsIcon fontSize="large" color="secondary" />
			</div>
			<Activities />
		</div>
	);
};

export default GamesActivities;
