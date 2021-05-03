import React from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

// Components
import User from "./components/user.component";
import MainPage from "./pages/Main/Main";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Route exact path="/" component={MainPage} />
				<Route exact path="/evgeny" component={User} />
			</BrowserRouter>
		</div>
	);
}

export default App;
