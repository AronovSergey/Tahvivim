import React from "react";
import { useSelector } from "react-redux";

import { RootStoreType } from "../../redux/store";

// MUI Stuff
import Paper from "@material-ui/core/Paper";

const Profile = () => {
	const { user } = useSelector((state: RootStoreType) => state.user);

	return (
		<div>
			<Paper>
				<div className="profile">
					<div className="profile__image_wrapper">
						<img
							src={`/api/users/avatar/${user._id}`}
							alt="profile"
							className="profile__image"
						/>
					</div>
				</div>
			</Paper>
		</div>
	);
};

export default Profile;
