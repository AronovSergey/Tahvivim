import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import FaceIcon from "@material-ui/icons/Face";
import { Grid } from "@material-ui/core";

const User = () => {
	const params = useParams<{ id: string }>();
	const [user, setUser] = useState({ name: "", email: "", age: "" });

	useEffect(() => {
		(async () => {
			const { data } = await axios.get(`/api/users/${params.id}`);
			setUser(data);
			console.log(data);
		})();
	}, [params]);

	console.log(user);
	return (
		<div>
			<Grid container>
				<Grid item xs={12} sm={2} />
				<Grid item xs={12} sm={3} className="flex-row">
					<img
						src={`/api/users/avatar/${params.id}`}
						alt="profile"
						className="profile__image"
					/>
				</Grid>
				<Grid item xs={12} sm={5}>
					<div className="title">
						<FaceIcon fontSize="large" color="secondary" />
						{user.name}
					</div>
					<div style={{ textAlign: "center", paddingLeft: "40px" }}>
						<h2>{`Email : ${user.email}`}</h2>
						<h2>{`Age : ${user.age}`}</h2>
					</div>
				</Grid>
				<Grid item xs={12} sm={2} />
			</Grid>
		</div>
	);
};

export default User;
