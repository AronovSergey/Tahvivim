import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Pages
import MainPage from "../Main/Main";
import SportActivities from "../SportActivities/SportActivities";
import MusicActivities from "../MusicActivities/MusicActivities";
import GamesActivities from "../GamesActivities/GamesActivities";
import SearchResult from "../SearchResult/SearchResult";
import NewActivity from "../NewActivity/NewActivity";
import Profile from "../Profile/Profile.js";

const LoggedInPages = () => {
	return (
		<Switch>
			<Redirect from="/login" exact to="/" />
			<Redirect from="/signin" exact to="/" />
			<Route exact path="/create" component={NewActivity} />
			<Route exact path="/profile" component={Profile} />

			<Route exact path="/" component={MainPage} />
			<Route exact path="/sport" component={SportActivities} />
			<Route exact path="/music" component={MusicActivities} />
			<Route exact path="/games" component={GamesActivities} />
			<Route exact path="/search" component={SearchResult} />
		</Switch>
	);
};

export default LoggedInPages;
