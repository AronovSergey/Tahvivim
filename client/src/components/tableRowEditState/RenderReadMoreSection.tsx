import React from "react";
import MyInput from "../myInput/MyInput";

import Grid from "@material-ui/core/Grid";
import CheckIcon from "@material-ui/icons/Check";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

const RenderReadMoreSection: React.FC<{
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	description: string;
	city: string;
	address: string | undefined;
	changeEditState: () => void;
	createdAt: string;
	onUpdateSubmit: () => void;
}> = ({
	handleInputChange,
	description,
	city,
	address,
	changeEditState,
	createdAt,
	onUpdateSubmit,
}) => {
	return (
		<Grid container className="table_row__read_more_container">
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
				{`Created At: ${new Date(createdAt).toDateString()}`}
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
				{`Updated At: ${new Date(createdAt).toDateString()}`}
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
				ן
			</Grid>
		</Grid>
	);
};

export default RenderReadMoreSection;
