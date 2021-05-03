import React from "react";
import { useHistory } from "react-router-dom";
import "./Main.css";

const Main = () => {
	const history = useHistory();

	return (
		<div className="flex-row">
			<div
				className="sport background flex-column"
				onClick={() => history.push("/sport")}
			>
				<div className="title_container">
					<h1>Sport And Camping</h1>
				</div>
			</div>
			<div
				className="music background flex-column"
				onClick={() => history.push("/music")}
			>
				<div className="title_container">
					<h1>Music</h1>
				</div>
			</div>
			<div
				className="games background flex-column"
				onClick={() => history.push("/games")}
			>
				<div className="title_container">
					<h1>Games And Other Activities</h1>
				</div>
			</div>
		</div>
	);
};

export default Main;
