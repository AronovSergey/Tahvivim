import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useSelector } from "react-redux";

import { RootStoreType } from "../../redux/store";
import { TableRowInterface } from "../tableRow/TableRow";

// MUI Stuff
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonAddDisabledIcon from "@material-ui/icons/PersonAddDisabled";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import grey from "@material-ui/core/colors/grey";
import MuiLink from "@material-ui/core/Link";

const TableRowUneditable: React.FC<TableRowInterface> = ({
	_id,
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
	onActivitySignupClick,
	onActivityUnsignClick,
}) => {
	const { user } = useSelector((state: RootStoreType) => state.user);
	const [inParticipants, setInParticipants] = useState(
		participants.map((participant) => participant._id).includes(user._id)
	);

	const [localParticipants, setLocalParticipants] =
		useState<any[]>(participants);

	const RenderReadMoreSection = () => {
		if (showMore) {
			return (
				<Grid container>
					<Grid
						item
						xs={12}
						sm={6}
						className="table_row__right_border table_row__mobile_remove_right_border"
					>
						<Grid className="table_row__element table_row__top_border">{`Description: ${description}`}</Grid>
						<Grid className="table_row__element table_row__top_border">
							{localParticipants.map((participant, index) => (
								<div key={index}>
									{`Participant Number ${index + 1}:  `}
									<MuiLink
										component={Link}
										to={`/users/${participant._id}`}
										color="primary"
										variant="body1"
										className="profile__link"
									>
										{participant.name}
									</MuiLink>
									{`, ${participant.age} Years Old`}
								</div>
							))}
						</Grid>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Grid className="table_row__element table_row__top_border">
							{`Category:  ${category}`}
						</Grid>
						<Grid className=" table_row__element table_row__top_border">
							{`Subategory:  ${subcategory}`}
						</Grid>
						<Grid className="table_row__element table_row__top_border">
							{`${address.city} ${
								address.address ? `- ${address.address}` : ""
							}`}
						</Grid>
						<Grid
							container
							className="table_row__element table_row__top_border"
						>
							<Grid item xs={4}>
								<Tooltip
									title="Add to favorites"
									placement="top"
								>
									<IconButton
										onClick={(e) => {
											e.stopPropagation();
											if (isFavorite) {
												onRemoveFavoriteClick(_id);
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
												setInParticipants(
													!inParticipants
												);
												if (inParticipants) {
													setLocalParticipants(
														localParticipants.filter(
															(participant) =>
																participant._id !==
																user._id
														)
													);
													onActivityUnsignClick();
												} else {
													setLocalParticipants([
														...localParticipants,
														user,
													]);
													onActivitySignupClick();
												}
											}}
										>
											{inParticipants ? (
												<PersonAddDisabledIcon
													style={{ color: grey[900] }}
												/>
											) : (
												<PersonAddIcon
													style={{ color: grey[900] }}
												/>
											)}
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
				className="table_row__element table_row__right_border table_row__mobile_remove_right_border table_row__mobile_add_bottom_border"
			>
				<h3>{title}</h3>
			</Grid>
			<Grid
				item
				xs={4}
				sm={3}
				className="table_row__element table_row__right_border"
			>
				<h4>{`Number of places: ${localParticipants.length}/${places}`}</h4>
			</Grid>
			<Grid
				item
				xs={4}
				sm={3}
				className="table_row__element table_row__right_border"
			>
				<h4>{`Location: ${address.city}`}</h4>
			</Grid>
			<Grid item xs={4} sm={2} className="table_row__element">
				<h4>{`Date: ${moment(date).format("YYYY-MM-DD")}`}</h4>
			</Grid>
			<RenderReadMoreSection />
		</Grid>
	);
};

export default TableRowUneditable;
