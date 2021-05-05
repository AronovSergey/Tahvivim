import React from "react";
import { Route } from "react-router";
import { BrowserRouter, Switch } from "react-router-dom";

import "./App.css";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Searchbar from "./components/searchbar/Searchbar";

// Pages
import MainPage from "./pages/Main/Main";
import Activities from "./pages/Activities/Activities";

function App() {
	return (
		<div>
			<BrowserRouter>
				<div className="app">
					<div>
						<Header />
						<Navbar />
						<Searchbar />
						<div className="page_body">
							<Switch>
								<Route exact path="/" component={MainPage} />
								<Route
									exact
									path="/sport"
									component={Activities}
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
