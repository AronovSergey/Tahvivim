import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Pages
import MainPage from "../Main/Main";
import SportActivities from "../SportActivities/SportActivities";
import MusicActivities from "../MusicActivities/MusicActivities";
import GamesActivities from "../GamesActivities/GamesActivities";
import SearchResult from "../SearchResult/SearchResult";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";

const NotLoggedInPages = () => {
	return (
		<Switch>
			<Redirect from="/create" exact to="/login" />
			<Redirect from="/profile" exact to="/login" />
			<Redirect from="favorites" exact to="/login" />
			<Redirect from="/my_activities" exact to="/login" />
			<Route exact path="/signin" component={Signin} />
			<Route exact path="/signup" component={Signup} />

			<Route exact path="/" component={MainPage} />
			<Route exact path="/sport" component={SportActivities} />
			<Route exact path="/music" component={MusicActivities} />
			<Route exact path="/games" component={GamesActivities} />
			<Route exact path="/search" component={SearchResult} />
		</Switch>
	);
};

export default NotLoggedInPages;
