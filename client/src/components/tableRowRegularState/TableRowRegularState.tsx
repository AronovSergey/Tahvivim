import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";

import { RootStoreType } from "../../redux/store";
import { TableRowInterface } from "../tableRow/TableRow";

// MUI Stuff
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import grey from "@material-ui/core/colors/grey";

const TableRowUneditable: React.FC<TableRowInterface> = ({
	owner,
	category,
	subcategory,
	title,
	description,
	places,
	participants,
	address,
	showMore,
	setShowMore,
	changeEditState,
	date,
	isFavorite,
	setIsFavorite,
	onFavoriteClick,
	onRemoveFavoriteClick,
}) => {
	const { user } = useSelector((state: RootStoreType) => state.user);

	const RenderReadMoreSection = () => {
		if (showMore) {
			return (
				<Grid container className="table_row__read_more_container">
					<Grid
						item
						xs={12}
						sm={6}
						className="table_row__element table_row__element table_row__top_border table_row__mobile_remove_right_border"
					>
						{`Category:  ${category}`}
					</Grid>
					<Grid
						item
						xs={12}
						sm={6}
						className=" table_row__element table_row__top_border table_row__last_colmun"
					>
						{`Subategory:  ${subcategory}`}
					</Grid>
					<Grid
						item
						xs={12}
						sm={12}
						className="table_row__description table_row__element"
					>
						{`Description: ${description}`}
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
										if (isFavorite) {
											onRemoveFavoriteClick();
										} else {
											onFavoriteClick();
										}
									}}
								>
									{isFavorite ? (
										<FavoriteIcon
											style={{ color: grey[900] }}
										/>
									) : (
										<FavoriteBorderIcon
											style={{ color: grey[900] }}
										/>
									)}
								</IconButton>
							</Tooltip>
						</Grid>
						{owner !== user._id && (
							<Grid item xs={4}>
								<Tooltip
									title="Signup to this event"
									placement="top"
								>
									<IconButton
										onClick={(e) => {
											e.stopPropagation();
										}}
									>
										<AddIcon style={{ color: grey[900] }} />
									</IconButton>
								</Tooltip>
							</Grid>
						)}
						{owner === user._id && (
							<Grid item xs={4}>
								<Tooltip
									title="Edit this activity"
									placement="top"
								>
									<IconButton
										onClick={(e) => {
											e.stopPropagation();
											changeEditState();
										}}
									>
										<EditIcon
											style={{ color: grey[900] }}
										/>
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
				sm={4}
				className="table_row__element table_row__mobile_remove_right_border
				table_row__mobile_add_bottom_border"
			>
				<h3>{title}</h3>
			</Grid>
			<Grid item xs={4} sm={3} className="table_row__element">
				<h4>{`Number of places: ${participants.length}/${places}`}</h4>
			</Grid>
			<Grid item xs={4} sm={3} className="table_row__element">
				<h4>{`Location: ${address.city}`}</h4>
			</Grid>
			<Grid
				item
				xs={4}
				sm={2}
				className="table_row__last_colmun table_row__element"
			>
				<h4>{`Date: ${moment(date).format("YYYY-MM-DD")}`}</h4>
			</Grid>
			<RenderReadMoreSection />
		</Grid>
	);
};

export default TableRowUneditable;
