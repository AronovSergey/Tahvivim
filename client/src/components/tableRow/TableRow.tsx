import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

import "./TableRow.css";
import { ActivityType } from "../../redux/actionTypes/activities.actionTypes";

// MUI Stuff
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const TableRow: React.FC<ActivityType> = ({
	title,
	description,
	places,
	participants,
	address,
	createdAt,
}) => {
	const [showMore, setShowMore] = useState(false);

	const RenderReadMoreSection = () => {
		if (showMore) {
			return (
				<Grid container className="table_row__read_more_container">
					<Grid
						item
						xs={12}
						sm={12}
						className="table_row__description table_row__element"
					>
						{description}
					</Grid>
					<Grid
						item
						xs={12}
						sm={6}
						style={{
							borderBottom: "1px dotted #777",
						}}
						className="table_row__element"
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
					<Grid item xs={12} sm={6} className="table_row__element">
						{`${address.city} ${
							address.address ? `- ${address.address}` : ""
						}`}
					</Grid>
					<Grid
						item
						container
						xs={12}
						sm={6}
						spacing={10}
						className="table_row__last_colmun table_row__element"
					>
						<Grid item>
							<Button
								variant="contained"
								color="primary"
								startIcon={<FavoriteBorderIcon />}
							>
								Add to favorites
							</Button>
						</Grid>
						<Grid item>
							<Button
								variant="contained"
								color="primary"
								startIcon={<AddIcon />}
							>
								Signup to this event
							</Button>
						</Grid>
					</Grid>
				</Grid>
			);
		} else return <></>;
	};

	return (
		<Grid
			container
			className="table_row__container"
			onClick={() => setShowMore(!showMore)}
		>
			<Grid item xs={8} sm={5} className="table_row__element">
				{title}
			</Grid>
			<Grid item xs={1} sm={2} className="table_row__element">
				{`Number of places: ${participants}/${places}`}
			</Grid>
			<Grid item xs={2} sm={2} className="table_row__element">
				{`Location: ${address.city}`}
			</Grid>
			<Grid
				item
				xs={1}
				sm={3}
				className="table_row__last_colmun table_row__element"
			>
				{`Date: ${new Date(createdAt).toDateString()}`}
			</Grid>
			<RenderReadMoreSection />
		</Grid>
	);
};

export default TableRow;
