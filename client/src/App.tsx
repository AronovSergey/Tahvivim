import React from "react";
import { Route } from "react-router";
import { BrowserRouter, Switch } from "react-router-dom";

import "./App.css";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

// Pages
import MainPage from "./pages/Main/Main";
import SportActivities from "./pages/SportActivities/SportActivities";
import MusicActivities from "./pages/MusicActivities/MusicActivities";
import GamesActivities from "./pages/GamesActivities/GamesActivities";
import SearchResult from "./pages/SearchResult/SearchResult";
import Login from "./pages/Login/Login";
import Signin from "./pages/Signin/Signin";
import NewActivity from "./pages/NewActivity/NewActivity";
import Profile from "./pages/Profile/Profile.js";

function App() {
	return (
		<div>
			<BrowserRouter>
				<div className="app">
					<div>
						<Header />
						<Navbar />
						<div className="page_body">
							<Switch>
								<Route exact path="/" component={MainPage} />
								<Route
									exact
									path="/sport"
									component={SportActivities}
								/>
								<Route
									exact
									path="/music"
									component={MusicActivities}
								/>
								<Route
									exact
									path="/games"
									component={GamesActivities}
								/>
								<Route
									exact
									path="/search"
									component={SearchResult}
								/>
								<Route exact path="/login" component={Login} />
								<Route
									exact
									path="/signin"
									component={Signin}
								/>
								<Route
									exact
									path="/create"
									component={NewActivity}
								/>
								<Route
									exact
									path="/profile"
									component={Profile}
								/>
							</Switch>
						</div>
					</div>
					<Footer />
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
