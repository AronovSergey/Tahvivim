import React from "react";
import TableRow from "../../components/tableRow/TableRow";
import { ActivityType } from "../../redux/actionTypes/activities.actionTypes";

const DisplayActivities: React.FC<{
	activities: ActivityType[];
	removeOne?: (id: string) => void;
}> = ({ activities, removeOne }) => {
	return (
		<div style={{ margin: "0 30px" }}>
			{activities.map((activity, index) => (
				<div
					key={activity._id}
					className={`${
						index % 2
							? "primary-background"
							: "secondary-background"
					}`}
				>
					<TableRow
						_id={activity._id}
						date={activity.date}
						owner={activity.owner}
						ownerName={activity.ownerName}
						category={activity.category}
						subcategory={activity.subcategory}
						title={activity.title}
						description={activity.description}
						places={activity.places}
						participants={activity.participants}
						createdAt={activity.createdAt}
						updatedAt={activity.updatedAt}
						address={activity.address}
						removeOne={removeOne}
					/>
				</div>
			))}
		</div>
	);
};

export default DisplayActivities;
