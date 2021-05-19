import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Activities from "../../components/activities/Activities";
import { updateSearchParams } from "../../redux/actions/activities.actions";

import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";

const SportActivities = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(updateSearchParams("Sport And Camping", undefined, ""));
	}, [dispatch]);
	return (
		<div>
			<div className="title">
				<SportsSoccerIcon fontSize="large" color="secondary" />
				<span className="primary-font">
					{"   Sport And Camping   "}
				</span>
				Activities
				<SportsSoccerIcon fontSize="large" color="secondary" />
			</div>
			<Activities />
		</div>
	);
};

export default SportActivities;
