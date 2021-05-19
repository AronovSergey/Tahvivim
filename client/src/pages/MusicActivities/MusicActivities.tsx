import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Activities from "../../components/activities/Activities";
import { updateSearchParams } from "../../redux/actions/activities.actions";
import MusicNoteIcon from "@material-ui/icons/MusicNote";

const MusicActivities = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(updateSearchParams("Music", undefined, ""));
	}, [dispatch]);
	return (
		<div>
			<div className="title">
				<MusicNoteIcon fontSize="large" color="secondary" />
				<span className="primary-font">Music</span> Activities :
				Activities
				<MusicNoteIcon fontSize="large" color="secondary" />
			</div>

			<Activities />
		</div>
	);
};

export default MusicActivities;
