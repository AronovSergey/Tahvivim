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
	category: string | undefined;
	setSubcategory: (value: string) => void;
}

const Subcategory: React.FC<Props> = ({ value, category, setSubcategory }) => {
	return (
		<TextField
			id="subcategory_select"
			select
			name="subcategory"
			label="Subcategory"
			fullWidth
			value={value}
			onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
				setSubcategory(event.target.value)
			}
			variant="outlined"
		>
			{category &&
				categories[category].map((option) => (
					<MenuItem key={option} value={option}>
						{option}
					</MenuItem>
				))}
		</TextField>
	);
};

export default Subcategory;
