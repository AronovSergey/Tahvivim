import React from "react";
import "./About.css";

import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Grid } from "@material-ui/core";

const About = () => {
	return (
		<div>
			<div className="title">
				<SupervisedUserCircleIcon fontSize="large" color="secondary" />
				About
				<SupervisedUserCircleIcon fontSize="large" color="secondary" />
			</div>
			<Grid container>
				<Grid item xs={12} sm={1} />
				<Grid item xs={12} sm={4}>
					<div className="about__img" />
				</Grid>
				<Grid item xs={12} sm={6}>
					<div style={{ textAlign: "center" }}>
						<h2>
							Tahvivim helps you find partners for your favorite
							activities
							<br />
							Choose your favorite activity out of variaty
							activities
						</h2>
						<h3>
							In today's urban life,
							<br />
							It's hard for people to find partners to share their
							common hobby with.
							<br />
							It's hard to get exposedto new types of hobby's and
							actually take part in them.
							<br />
							It's hard to find a constant weekly activity around
							you unless you happened to hear about it.
						</h3>
					</div>
				</Grid>
				<Grid item xs={12} sm={1} />
			</Grid>
		</div>
	);
};

export default About;
