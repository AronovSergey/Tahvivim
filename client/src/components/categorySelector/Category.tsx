import React from "react";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

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

interface Props {
	value: string | undefined;
	setCategory: (value: string) => void;
}

const Category: React.FC<Props> = ({ value, setCategory }) => {
	return (
		<TextField
			id="category_select"
			name="category"
			select
			label="Category"
			fullWidth
			value={value}
			onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
				setCategory(event.target.value);
			}}
			variant="outlined"
		>
			{Object.keys(categories).map((option) => (
				<MenuItem key={option} value={option}>
					{option}
				</MenuItem>
			))}
		</TextField>
	);
};

export default Category;
