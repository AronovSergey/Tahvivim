import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./Searchbar.css";
import Category from "../categorySelector/Category";
import Subcategory from "../subcategorySelector/Subcategory";
import { updateSearchParams } from "../../redux/actions/activities.actions";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

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
				<Category
					value={category}
					setCategory={setCategory}
					setSubcategory={setSubcategory}
				/>
			</Grid>
			<Grid item sm={3} xs={6}>
				<Subcategory
					value={subcategory}
					category={category}
					setSubcategory={setSubcategory}
				/>
			</Grid>
		</Grid>
	);
};

export default Searchbar;
