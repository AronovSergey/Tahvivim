import React from "react";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

const About = () => {
	return (
		<div>
			<div className="title">
				<SupervisedUserCircleIcon fontSize="large" color="secondary" />
				{About}
				<SupervisedUserCircleIcon fontSize="large" color="secondary" />
			</div>
		</div>
	);
};

export default About;
