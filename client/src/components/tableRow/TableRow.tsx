import React, { useState } from "react";

import "./TableRow.css";
import { ActivityType } from "../../redux/actionTypes/activities.actionTypes";
import TableRowRegularState from "../tableRowRegularState/TableRowRegularState";
import TableRowEditState from "../tableRowEditState/TableRowEditState";

export interface TableRowInterface extends ActivityType {
	showMore: boolean;
	setShowMore: React.Dispatch<React.SetStateAction<boolean>>;
	changeEditState: () => void;
}

const TableRow: React.FC<ActivityType> = ({
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
	_id,
}) => {
	const [showMore, setShowMore] = useState(false);
	const [isEditable, setIsEditable] = useState(false);

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
			/>
		);
	else
		return (
			<TableRowRegularState
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
			/>
		);
};

export default TableRow;
