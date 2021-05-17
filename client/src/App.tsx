import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import { RootStoreType } from "./redux/store";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

// Pages
import LoggedInPages from "./pages/LoggedInPages/LoggedInPages";
import NotLoggedInPages from "./pages/NotLoggedInPages/NotLoggedInPages";

function App() {
	const { token } = useSelector((state: RootStoreType) => state.user);
	return (
		<div>
			<BrowserRouter>
				<div className="app">
					<div>
						<Header />
						<Navbar />
						<div className="page_body">
							{token ? <LoggedInPages /> : <NotLoggedInPages />}
						</div>
					</div>
					<Footer />
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
