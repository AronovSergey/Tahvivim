import React from "react";
import "./Spinner.css";
import CircularProgress from "@material-ui/core/CircularProgress";

const Spinner = () => {
	return (
		<div className="spinner">
			<CircularProgress color="primary" size="6rem" />
		</div>
	);
};

export default Spinner;
