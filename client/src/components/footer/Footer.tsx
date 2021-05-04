import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { grey } from "@material-ui/core/colors";

import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-line flex-row">
				<span>GitHub Project Repository</span>
				<a
					href="https://github.com/AronovSergey/Tahvivim"
					target="_blank"
					rel="noreferrer"
				>
					<GitHubIcon style={{ color: grey[500] }} />
				</a>
			</div>
			<div className="footer-line flex-row">
				<span>Copyright &copy; 2021 - Sergey Aronov</span>
				<a
					href="https://www.linkedin.com/in/sergey-aronov-61a93a16a/"
					target="_blank"
					rel="noreferrer"
				>
					<LinkedInIcon style={{ color: grey[100] }} />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
