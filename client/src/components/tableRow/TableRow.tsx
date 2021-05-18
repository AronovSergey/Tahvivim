import React, { useState, useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./TableRow.css";
import { RootStoreType } from "../../redux/store";
import {
	addToFavorites,
	removeFromFavorites,
} from "../../redux/actions/user.actions";
import { ActivityType } from "../../redux/actionTypes/activities.actionTypes";
import TableRowRegularState from "../tableRowRegularState/TableRowRegularState";
import TableRowEditState from "../tableRowEditState/TableRowEditState";

import MuiLink from "@material-ui/core/Link";

export interface TableRowInterface extends ActivityType {
	showMore: boolean;
	setShowMore: React.Dispatch<React.SetStateAction<boolean>>;
	changeEditState: () => void;
	isFavorite: boolean;
	setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>;
	onFavoriteClick: () => void;
	onRemoveFavoriteClick: () => void;
}

const TableRow: React.FC<ActivityType> = ({
	_id,
	date,
	owner,
	ownerName,
	category,
	subcategory,
	title,
	description,
	places,
	participants,
	address,
	createdAt,
	updatedAt,
}) => {
	const dispatch = useDispatch();
	const [isFavorite, setIsFavorite] = useState(false);
	const { user, token } = useSelector((state: RootStoreType) => state.user);
	const [showMore, setShowMore] = useState(false);
	const [isEditable, setIsEditable] = useState(false);

	const createdAtDate = moment(createdAt).fromNow();
	const updatedAtDate = moment(updatedAt).fromNow();

	useEffect(() => {
		if (_id) setIsFavorite(user.favorites.includes(_id));
	}, [user, _id]);

	const onFavoriteClick = () => {
		dispatch(addToFavorites(token, _id));
	};

	const onRemoveFavoriteClick = () => {
		dispatch(removeFromFavorites(token, _id));
	};
	const RenderTableRow = () => {
		if (isEditable)
			return (
				<TableRowEditState
					_id={_id}
					date={date}
					owner={owner}
					category={category}
					subcategory={subcategory}
					title={title}
					description={description}
					places={places}
					participants={participants}
					address={address}
					showMore={showMore}
					setShowMore={setShowMore}
					changeEditState={() => setIsEditable(false)}
					isFavorite={isFavorite}
					setIsFavorite={setIsFavorite}
					onFavoriteClick={onFavoriteClick}
					onRemoveFavoriteClick={onRemoveFavoriteClick}
				/>
			);
		else
			return (
				<TableRowRegularState
					_id={_id}
					date={date}
					owner={owner}
					category={category}
					subcategory={subcategory}
					title={title}
					description={description}
					places={places}
					participants={participants}
					address={address}
					showMore={showMore}
					setShowMore={setShowMore}
					changeEditState={() => setIsEditable(true)}
					isFavorite={isFavorite}
					setIsFavorite={setIsFavorite}
					onFavoriteClick={onFavoriteClick}
					onRemoveFavoriteClick={onRemoveFavoriteClick}
				/>
			);
	};

	return (
		<div>
			<div style={{ backgroundColor: "white", fontSize: "20px" }}>
				Created by{" "}
				<MuiLink
					component={Link}
					to={`/users/${owner}`}
					color="primary"
					variant="h6"
					className="profile__link"
				>
					{ownerName}
				</MuiLink>
				{` ${createdAtDate}`}
				{createdAtDate !== updatedAtDate && (
					<span>{`, last update ${updatedAtDate}`}</span>
				)}
			</div>
			<RenderTableRow />
		</div>
	);
};

export default TableRow;
