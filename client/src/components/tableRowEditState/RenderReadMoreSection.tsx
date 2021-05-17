import React from "react";
import { Link } from "react-router-dom";

import MyInput from "../myInput/MyInput";
import Category from "../categorySelector/Category";
import Subcategory from "../subcategorySelector/Subcategory";

import Grid from "@material-ui/core/Grid";
import MuiLink from "@material-ui/core/Link";
import CheckIcon from "@material-ui/icons/Check";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

interface Props {
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	description: string;
	city: string;
	owner: string | undefined;
	ownerName: string | undefined;
	category: string | undefined;
	subcategory: string | undefined;
	address: string | undefined;
	changeEditState: () => void;
	createdAt: string | undefined;
	updatedAt: string | undefined;
	onUpdateSubmit: () => void;
	setCategory: (value: string) => void;
	setSubcategory: (value: string) => void;
}

const RenderReadMoreSection: React.FC<Props> = ({
	handleInputChange,
	description,
	city,
	owner,
	ownerName,
	category,
	subcategory,
	address,
	changeEditState,
	createdAt,
	updatedAt,
	onUpdateSubmit,
	setCategory,
	setSubcategory,
}) => {
	return (
		<Grid container className="table_row__read_more_container">
			<Grid
				item
				xs={12}
				sm={4}
				className="table_row__element table_row__element table_row__top_border table_row__mobile_remove_right_border"
			>
				{`Owner: `}
				<MuiLink
					component={Link}
					to={`/users/${owner}`}
					color="primary"
					variant="body1"
					className="profile__link"
				>
					{ownerName}
				</MuiLink>
			</Grid>
			<Grid
				item
				xs={12}
				sm={4}
				className="table_row__element table_row__element table_row__top_border table_row__mobile_remove_right_border"
			>
				<Category
					value={category}
					setCategory={setCategory}
					setSubcategory={setSubcategory}
				/>
			</Grid>
			<Grid
				item
				xs={12}
				sm={4}
				className=" table_row__element table_row__top_border table_row__last_colmun"
			>
				<Subcategory
					value={subcategory}
					category={category}
					setSubcategory={setSubcategory}
				/>
			</Grid>
			<Grid
				item
				xs={12}
				sm={12}
				className="table_row__description table_row__element"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<MyInput
					name="description"
					label="Description"
					value={description}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid
				item
				xs={12}
				sm={6}
				style={{
					borderBottom: "1px dotted #777",
				}}
				className="table_row__element table_row__mobile_remove_right_border"
			>
				{`Created At: ${
					createdAt ? new Date(createdAt).toDateString() : ""
				}`}
			</Grid>
			<Grid
				item
				xs={12}
				sm={6}
				className="table_row__last_colmun table_row__element"
				style={{
					borderBottom: "1px dotted #777",
				}}
			>
				{`Updated At: ${
					updatedAt ? new Date(updatedAt).toDateString() : ""
				}`}
			</Grid>
			<Grid
				item
				xs={12}
				sm={6}
				className="table_row__element
                table_row__mobile_remove_right_border table_row__mobile_add_bottom_border"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<MyInput
					name="city"
					label="City"
					value={city}
					onChange={handleInputChange}
				/>
				<MyInput
					name="address"
					label="Address"
					value={address || ""}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid
				item
				container
				xs={12}
				sm={6}
				spacing={10}
				className="table_row__last_colmun table_row__element"
			>
				<Grid item xs={4}>
					<Tooltip title="Save this activity" placement="top">
						<IconButton
							onClick={(e) => {
								e.stopPropagation();
								onUpdateSubmit();
								changeEditState();
							}}
						>
							<CheckIcon color="primary" />
						</IconButton>
					</Tooltip>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default RenderReadMoreSection;
