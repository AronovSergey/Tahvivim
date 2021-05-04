import React from "react";
import { Route } from "react-router";
import { BrowserRouter, Switch } from "react-router-dom";

import "./App.css";

// Components
import User from "./components/user.component";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import MainPage from "./pages/Main/Main";

function App() {
	return (
		<div>
			<BrowserRouter>
				<div className="app">
					<div>
						<Header />
						<div className="page_body">
							<Switch>
								<Route exact path="/" component={MainPage} />
								<Route exact path="/evgeny" component={User} />
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
