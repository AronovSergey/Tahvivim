import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { RootStoreType } from "../../redux/store";
import Spinner from "../../UI/Spinner/Spinner";
import DisplayActivities from "../../components/activities/DisplayActivities";

const MyActivities = () => {
	const [acivities, setAcivities] = useState([]);
	const { token } = useSelector((state: RootStoreType) => state.user);

	useEffect(() => {
		(async () => {
			const { data } = await axios.get("/api/participants", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setAcivities(data);
		})();
	}, [token]);

	return (
		<div>
			{acivities.length === 0 && <Spinner />}
			{acivities.length > 0 && (
				<div>
					<h1>My Activities :</h1>
					<DisplayActivities activities={acivities} />
				</div>
			)}
		</div>
	);
};

export default MyActivities;
