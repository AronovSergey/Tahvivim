import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@material-ui/core/Paper";

const Profile = () => {
	const dispatch = useDispatch();

	useEffect(() => {}, [dispatch]);

	return (
		<div>
			<Paper>
				<div className="profile">
					<div className="profile__image_wrapper">
						<img src="" alt="profile" className="profile__image" />
					</div>
				</div>
			</Paper>
		</div>
	);
};

export default Profile;
