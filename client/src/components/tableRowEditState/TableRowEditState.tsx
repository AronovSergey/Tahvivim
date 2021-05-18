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
	ownerName,
	category,
	subcategory,
	date,
	title,
	description,
	places,
	participants,
	address,
	createdAt,
	updatedAt,
	showMore,
	setShowMore,
	changeEditState,
	isFavorite,
	setIsFavorite,
}) => {
	const dispatch = useDispatch();

	const [inputDetails, setInputDetails] = useState({
		_id,
		date,
		owner,
		title,
		category,
		subcategory,
		description,
		places,
		participants,
		address,
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

	const setCategory: (value: string) => void = (value) => {
		setInputDetails({ ...inputDetails, category: value });
	};

	const setSubcategory: (value: string) => void = (value) => {
		setInputDetails({ ...inputDetails, subcategory: value });
	};

	return (
		<Grid
			container
			className="table_row__container"
			onClick={() => {
				setShowMore(true);
			}}
			style={{ backgroundColor: "white" }}
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
					name="places"
					label="Total places"
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
					style={{ marginTop: "30px" }}
				/>
			</Grid>

			{showMore && (
				<RenderReadMoreSection
					handleInputChange={handleInputChange}
					description={inputDetails.description}
					city={inputDetails.address.city}
					owner={owner}
					ownerName={ownerName}
					category={inputDetails.category}
					subcategory={inputDetails.subcategory}
					address={inputDetails.address.address}
					createdAt={createdAt}
					updatedAt={updatedAt}
					changeEditState={changeEditState}
					onUpdateSubmit={onUpdateSubmit}
					setCategory={setCategory}
					setSubcategory={setSubcategory}
				/>
			)}
		</Grid>
	);
};

export default TableRowEditState;
