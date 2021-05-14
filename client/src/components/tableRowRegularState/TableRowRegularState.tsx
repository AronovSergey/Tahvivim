import React, { useState } from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";

import { RootStoreType } from "../../redux/store";
import { TableRowInterface } from "../tableRow/TableRow";

// MUI Stuff
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const TableRowUneditable: React.FC<TableRowInterface> = ({
	owner,
	title,
	description,
	places,
	participants,
	address,
	createdAt,
	showMore,
	setShowMore,
	onEditClick,
}) => {
	const { user } = useSelector((state: RootStoreType) => state.user);

	const RenderReadMoreSection = () => {
		if (showMore) {
			return (
				<Grid container className="table_row__read_more_container">
					<Grid
						item
						xs={12}
						sm={12}
						className="table_row__description table_row__element "
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
					>
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
						<Grid item xs={4}>
							<Tooltip title="Add to favorites" placement="top">
								<IconButton
									onClick={(e) => {
										e.stopPropagation();
										if (onEditClick) onEditClick();
									}}
								>
									<FavoriteBorderIcon color="primary" />
								</IconButton>
							</Tooltip>
						</Grid>
						<Grid item xs={4}>
							<Tooltip
								title="Signup to this event"
								placement="top"
							>
								<IconButton
									onClick={(e) => {
										e.stopPropagation();
										if (onEditClick) onEditClick();
									}}
								>
									<AddIcon color="primary" />
								</IconButton>
							</Tooltip>
						</Grid>
						{owner === user._id && (
							<Grid item xs={4}>
								<Tooltip
									title="Edit this activity"
									placement="top"
								>
									<IconButton
										onClick={(e) => {
											e.stopPropagation();
											if (onEditClick) onEditClick();
										}}
									>
										<EditIcon color="primary" />
									</IconButton>
								</Tooltip>
							</Grid>
						)}
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
			<Grid
				item
				xs={12}
				sm={5}
				className="table_row__element table_row__mobile_remove_right_border
				table_row__mobile_add_bottom_border"
			>
				<h3>{title}</h3>
			</Grid>
			<Grid item xs={4} sm={2} className="table_row__element">
				{`Number of places: ${participants}/${places}`}
			</Grid>
			<Grid item xs={4} sm={2} className="table_row__element">
				{`Location: ${address.city}`}
			</Grid>
			<Grid
				item
				xs={4}
				sm={3}
				className="table_row__last_colmun table_row__element"
			>
				{`Date: ${new Date(createdAt).toDateString()}`}
			</Grid>
			<RenderReadMoreSection />
		</Grid>
	);
};

export default TableRowUneditable;
