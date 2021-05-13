import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Activities from "../../components/activities/Activities";
import { updateSearchParams } from "../../redux/actions/activities.actions";

const SportActivities = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(updateSearchParams("Sport And Camping", undefined, ""));
	}, [dispatch]);
	return (
		<div>
			<h1>
				<span className="primary-font">Sport And Camping</span>{" "}
				Activities :
			</h1>
			<Activities />
		</div>
	);
};

export default SportActivities;
