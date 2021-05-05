import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import "./Searchbar.css";

type categoriesType = {
	[key: string]: string[];
};

const categories: categoriesType = {
	"Sport && Camping": [
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
	const [value, setValue] = useState<string>("");
	const [category, setCategory] = useState<string>("Sport && Camping");
	const [subcategory, setSubcategory] = useState<string>("Basketball");
	const history = useHistory();

	const onKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === "Enter") {
			history.push(`/search/${value}`);
		}
	};

	return (
		<div className="search_container flex-row">
			<TextField
				className="search_field_container"
				id="search_input"
				label="Search"
				placeholder="Search an Activity.."
				value={value}
				onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
					setValue(event.target.value)
				}
				onKeyDown={onKeyDown}
				variant="outlined"
			/>

			<TextField
				id="category_select"
				select
				label="Category"
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

			<TextField
				id="subcategory_select"
				select
				label="Subcategory"
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
		</div>
	);
};

export default Searchbar;
