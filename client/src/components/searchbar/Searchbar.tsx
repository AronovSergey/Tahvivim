import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import "./Searchbar.css";
import { updateSearchParams } from "../../redux/actions/activities.actions";
import Grid from "@material-ui/core/Grid";

type categoriesType = {
	[key: string]: string[];
};

const categories: categoriesType = {
	"Sport And Camping": [
		"Basketball",
		"Camping",
		"Cycling",
		"Football",
		"Hiking",
		"Tennis",
		"TRX",
		"Walking",
		"Yoga",
	],
	Music: ["Drums", "Electric Guitar", "Guitar", "Join A Band", "Karaoke"],
	"Games And Other Activities": [
		"Acting",
		"Board Games",
		"Book Reading",
		"Chess",
		"Cooking",
		"Lectures",
		"Movies",
		"Video Games",
	],
};

const Searchbar = () => {
	const dispatch = useDispatch();
	const [value, setValue] = useState<string>("");
	const [category, setCategory] = useState<string>("Sport And Camping");
	const [subcategory, setSubcategory] = useState<string>("Basketball");
	const history = useHistory();

	const onKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === "Enter") {
			dispatch(updateSearchParams(category, subcategory, value));
			history.push(`/search`);
		}
	};

	return (
		<Grid container className="search_container ">
			<Grid item sm={6} xs={12}>
				<TextField
					className="search_field_container"
					id="search_input"
					label="Search"
					fullWidth
					placeholder="Search an Activity.."
					value={value}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
						setValue(event.target.value)
					}
					onKeyDown={onKeyDown}
					variant="outlined"
				/>
			</Grid>
			<Grid item sm={3} xs={6}>
				<TextField
					id="category_select"
					select
					label="Category"
					fullWidth
					value={category}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						setCategory(event.target.value);
						setSubcategory(categories[event.target.value][0]);
					}}
					variant="outlined"
				>
					{Object.keys(categories).map((option) => (
						<MenuItem key={option} value={option}>
							{option}
						</MenuItem>
					))}
				</TextField>
			</Grid>
			<Grid item sm={3} xs={6}>
				<TextField
					id="subcategory_select"
					select
					label="Subcategory"
					fullWidth
					value={subcategory}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
						setSubcategory(event.target.value)
					}
					variant="outlined"
				>
					{categories[category].map((option) => (
						<MenuItem key={option} value={option}>
							{option}
						</MenuItem>
					))}
				</TextField>
			</Grid>
		</Grid>
	);
};

export default Searchbar;
