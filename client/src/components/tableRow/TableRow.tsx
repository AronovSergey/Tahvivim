import React, { useState } from "react";

import "./TableRow.css";
import { ActivityType } from "../../redux/actionTypes/activities.actionTypes";
import TableRowRegularState from "../tableRowRegularState/TableRowRegularState";
import TableRowEditState from "../tableRowEditState/TableRowEditState";

export interface TableRowInterface extends ActivityType {
	showMore: boolean;
	setShowMore: React.Dispatch<React.SetStateAction<boolean>>;
	onEditClick?: () => void;
	onSaveClick?: () => void;
}

const TableRow: React.FC<ActivityType> = ({
	date,
	owner,
	title,
	description,
	places,
	participants,
	address,
	createdAt,
}) => {
	const [showMore, setShowMore] = useState(false);
	const [isEditable, setIsEditable] = useState(false);

	if (isEditable)
		return (
			<TableRowEditState
				date={date}
				owner={owner}
				title={title}
				description={description}
				places={places}
				participants={participants}
				address={address}
				createdAt={createdAt}
				showMore={showMore}
				setShowMore={setShowMore}
				onSaveClick={() => setIsEditable(false)}
			/>
		);
	else
		return (
			<TableRowRegularState
				date={date}
				owner={owner}
				title={title}
				description={description}
				places={places}
				participants={participants}
				address={address}
				createdAt={createdAt}
				showMore={showMore}
				setShowMore={setShowMore}
				onEditClick={() => setIsEditable(true)}
			/>
		);
};

export default TableRow;
