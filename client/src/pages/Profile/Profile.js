import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Profile.css";
import Spinner from "../../UI/Spinner/Spinner";
import { postUserProfileImage } from "../../redux/actions/user.actions";

// MUI Stuff
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

const Profile = () => {
	const dispatch = useDispatch();
	const { user, token, loading } = useSelector((state) => state.user);

	const handleImageChange = (event) => {
		const image = event.target.files[0];
		const formData = new FormData();
		formData.append("avatar", image, image.name);
		dispatch(postUserProfileImage(token, formData));
		window.location.reload(false);
	};

	const handleEditPicture = () => {
		const fileInput = document.getElementById("imageInput");
		fileInput.click();
	};

	return (
		<div>
			{loading && <Spinner />}
			{!loading && (
				<Paper className="flex-column">
					<div className="profile">
						<div className="profile__image_wrapper">
							<img
								src={`/api/users/avatar/${user._id}`}
								alt="profile"
								className="profile__image"
							/>
							<div className="profile__image_button">
								<input
									type="file"
									id="imageInput"
									hidden="hidden"
									onChange={handleImageChange}
								/>
								<Tooltip
									title="Edit profile picture"
									placement="top"
								>
									<IconButton onClick={handleEditPicture}>
										<EditIcon color="primary" />
									</IconButton>
								</Tooltip>
							</div>
						</div>
					</div>
				</Paper>
			)}
		</div>
	);
};

export default Profile;
