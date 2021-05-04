import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
	const { pathname } = useLocation();

	const [route, setRoute] = useState("/");

	useEffect(() => {
		setRoute(pathname);
	}, [pathname]);

	return (
		<div className="navbar">
			<Link
				to="/"
				className={`navbar__link ${
					route === "/" ? "navbar__active" : ""
				}`}
			>
				Home Page
			</Link>
			<Link
				to="/about"
				className={`navbar__link ${
					route === "/about" ? "navbar__active" : ""
				}`}
			>
				About
			</Link>
			<Link
				to="/sport"
				className={`navbar__link ${
					route === "/sport" ? "navbar__active" : ""
				}`}
			>
				Sport & Camping
			</Link>
			<Link
				to="/music"
				className={`navbar__link ${
					route === "/music" ? "navbar__active" : ""
				}`}
			>
				Music
			</Link>
			<Link
				to="/games"
				className={`navbar__link ${
					route === "/games" ? "navbar__active" : ""
				}`}
			>
				Games & Other Activities
			</Link>
		</div>
	);
};

export default Navbar;
