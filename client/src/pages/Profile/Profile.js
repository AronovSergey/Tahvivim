import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./Profile.css";
import MyInput from "../../components/myInput/MyInput.tsx";
import Spinner from "../../UI/Spinner/Spinner";
import { updateUserProfile } from "../../redux/actions/user.actions.ts";
import { postUserProfileImage } from "../../redux/actions/user.actions";

// MUI Stuff
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import MuiLink from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

const Profile = () => {
	const dispatch = useDispatch();
	const { user, token, loading } = useSelector((state) => state.user);
	const [inputDetails, setInputDetails] = useState(user);
	const { _id, name, age, email } = inputDetails;

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setInputDetails((prevSignUpDetails) => {
			return {
				...prevSignUpDetails,
				[name]: value,
			};
		});
	};

	const onFormSubmit = (event) => {
		event.preventDefault();
		dispatch(updateUserProfile(token, name, age, email));
		window.location.reload();
	};

	const handleImageChange = (event) => {
		const image = event.target.files[0];
		const formData = new FormData();
		formData.append("avatar", image, image.name);

		dispatch(postUserProfileImage(token, formData));
	};

	const handleEditPicture = () => {
		const fileInput = document.getElementById("imageInput");
		fileInput.click();
	};

	return (
		<div>
			{loading && <Spinner />}
			<Grid container>
				<Grid item xs={12} sm={2} />

				<Grid item container xs={12} sm={8}>
					<Grid item container xs={12} sm={6}>
						<div className="profile__image_wrapper">
							<img
								src={`/api/users/avatar/${_id}`}
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
					</Grid>

					<Grid
						item
						container
						direction="column"
						justify="space-between"
						alignItems="flex-start"
						xs={12}
						sm={6}
					>
						<div style={{ height: "60px" }}>
							<h1 className="profile__title">
								Edit user details:
							</h1>
							<MuiLink
								component={Link}
								to={`/users/${user.name}`}
								color="primary"
								variant="h6"
								className="profile__link"
							>
								{user.name}
							</MuiLink>
						</div>
						<br />
						<br />
						<form
							noValidate
							className="profile__input_section"
							onSubmit={onFormSubmit}
						>
							<MyInput
								name="name"
								value={name}
								onChange={handleInputChange}
								label="Name"
							/>
							<MyInput
								name="age"
								value={age}
								onChange={handleInputChange}
								label="Age"
							/>
							<MyInput
								name="email"
								value={email}
								onChange={handleInputChange}
								label="Mail"
							/>
							<Button
								type="submit"
								variant="contained"
								color="primary"
							>
								Submit
							</Button>
						</form>
					</Grid>
				</Grid>

				<Grid item xs={12} sm={2} />
			</Grid>
		</div>
	);
};

export default Profile;
