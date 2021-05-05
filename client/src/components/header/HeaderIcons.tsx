import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";

export const Mails: React.FC<{ number: number }> = ({ number }) => {
	return (
		<IconButton aria-label="show 2 new mails" color="inherit">
			<Badge badgeContent={number} color="secondary">
				<MailIcon />
			</Badge>
		</IconButton>
	);
};

export const Notifications: React.FC<{ number: number }> = ({ number }) => {
	return (
		<IconButton aria-label="show 2 new mails" color="inherit">
			<Badge badgeContent={number} color="secondary">
				<NotificationsIcon />
			</Badge>
		</IconButton>
	);
};

export const Account = () => {
	return (
		<IconButton
			aria-label="account of current user"
			aria-controls="primary-search-account-menu"
			aria-haspopup="true"
			color="inherit"
		>
			<AccountCircle />
		</IconButton>
	);
};
