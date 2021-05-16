import React, { useState } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";

import MyInput from "../myInput/MyInput";
import { TableRowInterface } from "../tableRow/TableRow";
import { updateActivity } from "../../redux/actions/activities.actions";

import Grid from "@material-ui/core/Grid";

// MUI Stuff
import Input from "@material-ui/core/Input";
import RenderReadMoreSection from "./RenderReadMoreSection";

const TableRowEditState: React.FC<TableRowInterface> = ({
	_id,
	owner,
	date,
	title,
	description,
	places,
	participants,
	address,
	createdAt,
	showMore,
	setShowMore,
	changeEditState,
}) => {
	const dispatch = useDispatch();

	const [inputDetails, setInputDetails] = useState({
		date,
		owner,
		title,
		description,
		places,
		participants,
		address,
		createdAt,
	});

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		if (name === "city" || name === "address") {
			setInputDetails((prevSignUpDetails) => {
				return {
					...prevSignUpDetails,
					address: { ...prevSignUpDetails.address, [name]: value },
				};
			});
		} else {
			setInputDetails((prevSignUpDetails) => {
				return {
					...prevSignUpDetails,
					[name]: value,
				};
			});
		}
	};

	const onUpdateSubmit = () => {
		dispatch(updateActivity(_id, inputDetails));
	};

	return (
		<Grid
			container
			className="table_row__container"
			onClick={() => {
				setShowMore(!showMore);
			}}
		>
			<Grid
				item
				xs={12}
				sm={5}
				className="table_row__element table_row__mobile_remove_right_border
				table_row__mobile_add_bottom_border"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<MyInput
					name="title"
					label="Title"
					value={inputDetails.title}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid
				item
				xs={4}
				sm={2}
				className="table_row__element"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<MyInput
					name="participants"
					label="Number of Participants"
					value={inputDetails.participants.toString()}
					onChange={handleInputChange}
				/>
				<MyInput
					name="places"
					label="Number of places"
					value={inputDetails.places.toString()}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid
				item
				xs={4}
				sm={2}
				className="table_row__element"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<MyInput
					name="city"
					label="Location City"
					value={inputDetails.address.city}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid
				item
				xs={4}
				sm={3}
				className="table_row__last_colmun table_row__element"
			>
				<Input
					type="date"
					name="date"
					value={moment(inputDetails.date).format("YYYY-MM-DD")}
					onChange={handleInputChange}
				/>
			</Grid>

			{showMore && (
				<RenderReadMoreSection
					handleInputChange={handleInputChange}
					description={inputDetails.description}
					city={inputDetails.address.city}
					address={inputDetails.address.address}
					createdAt={createdAt}
					changeEditState={changeEditState}
					onUpdateSubmit={onUpdateSubmit}
				/>
			)}
		</Grid>
	);
};

export default TableRowEditState;
