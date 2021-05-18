import React, { useState, useEffect } from "react";
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

	useEffect(() => {
		if (_id) setIsFavorite(user.favorites.includes(_id));
	}, [user, _id]);

	const onFavoriteClick = () => {
		dispatch(addToFavorites(token, _id));
	};

	const onRemoveFavoriteClick = () => {
		dispatch(removeFromFavorites(token, _id));
	};
	if (isEditable)
		return (
			<TableRowEditState
				_id={_id}
				date={date}
				owner={owner}
				ownerName={ownerName}
				category={category}
				updatedAt={updatedAt}
				subcategory={subcategory}
				title={title}
				description={description}
				places={places}
				participants={participants}
				address={address}
				createdAt={createdAt}
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
				ownerName={ownerName}
				category={category}
				subcategory={subcategory}
				title={title}
				description={description}
				places={places}
				participants={participants}
				address={address}
				createdAt={createdAt}
				updatedAt={updatedAt}
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

export default TableRow;
