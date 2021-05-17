import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./NewActivity.css";
import { RootStoreType } from "../../redux/store";
import { ActivityType } from "../../redux/actionTypes/activities.actionTypes";
import { createNewActivity } from "../../redux/actions/activities.actions";
import Category from "../../components/categorySelector/Category";
import Subcategory from "../../components/subcategorySelector/Subcategory";

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const initialInput: ActivityType = {
	title: "",
	description: "",
	places: 0,
	participants: 0,
	address: {
		city: "",
		address: "",
	},
	category: "Sport And Camping",
	subcategory: "Basketball",
	createdAt: "",
	date: new Date(),
};

const NewActivity = () => {
	const dispatch = useDispatch();
	const [inputDetails, setInputDetails] =
		useState<ActivityType>(initialInput);
	const {
		title,
		category,
		subcategory,
		description,
		places,
		participants,
		address,
	} = inputDetails;
	const { token } = useSelector((state: RootStoreType) => state.user);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		if (name === "city" || name === "address") {
			setInputDetails((prevSignUpDetails) => {
				return {
					...prevSignUpDetails,
					address: { ...address, [name]: value },
				};
			});
		} else {
			setInputDetails((prevSignUpDetails) => {
				return {
					...prevSignUpDetails,
					[name]: value,
				};
			});
		}
	};

	const onFormSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		if (token)
			dispatch(
				createNewActivity(
					token,
					title,
					category,
					subcategory,
					description,
					places,
					participants,
					address
				)
			);
	};

	const setCategory: (value: string) => void = (value) => {
		setInputDetails({ ...inputDetails, category: value });
	};

	const setSubcategory: (value: string) => void = (value) => {
		setInputDetails({ ...inputDetails, subcategory: value });
	};

	return (
		<Grid container>
			<Grid item xs={12} sm={2} />

			<Grid item xs={12} sm={8} className="new_activity__container">
				<Grid container>
					<Grid item xs={12} sm={4}>
						<h1>
							Create New{" "}
							<span style={{ color: "#3f51b5" }}>Activity</span>
						</h1>
					</Grid>
					<Grid item xs={12} sm={8}>
						<div className="new_activity__image"></div>
					</Grid>
				</Grid>

				<form
					noValidate
					onSubmit={onFormSubmit}
					className="new_activity__form"
				>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={12}>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="title"
								label="Activity Title"
								name="title"
								autoComplete="title"
								autoFocus
								onChange={handleInputChange}
							/>
						</Grid>
						<Grid item xs={6} sm={6}>
							<Category
								value={category}
								setCategory={setCategory}
								setSubcategory={setSubcategory}
							/>
						</Grid>
						<Grid item xs={6} sm={6}>
							<Subcategory
								value={subcategory}
								category={category}
								setSubcategory={setSubcategory}
							/>
						</Grid>
						<Grid item xs={12} sm={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								multiline
								rows={4}
								rowsMax={4}
								id="description"
								label="Activity Description"
								name="description"
								autoComplete="description"
								autoFocus
								onChange={handleInputChange}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="places"
								label="Number Of Places In This Activity"
								name="places"
								autoComplete="places"
								autoFocus
								onChange={handleInputChange}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								fullWidth
								id="participants"
								label="Number Of Participants"
								name="participants"
								autoComplete="participants"
								autoFocus
								onChange={handleInputChange}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="city"
								label="Activity City"
								name="city"
								autoComplete="city"
								autoFocus
								onChange={handleInputChange}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								fullWidth
								id="address"
								label="Activity Address"
								name="address"
								autoComplete="address"
								autoFocus
								onChange={handleInputChange}
							/>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
						>
							Submit
						</Button>
					</Grid>
				</form>
			</Grid>

			<Grid item xs={12} sm={2} />
		</Grid>
	);
};

export default NewActivity;
