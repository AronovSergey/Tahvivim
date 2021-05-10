import React from "react";
import { useSelector } from "react-redux";
import { Mails, Notifications, Account } from "./HeaderIcons";
import { RootStoreType } from "../../redux/store";

// MUI Stuff
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

interface Props {
	mobileMoreAnchorEl: Element | null;
	mobileMenuId: string;
	isMobileMenuOpen: boolean;
	handleMobileMenuClose: () => void;
	handleProfileMenuOpen: (event: React.MouseEvent<{}>) => void;
	numberOfEmails: number;
	numberOfNotifications: number;
}

const HeaderDesktopMenu: React.FC<Props> = ({
	mobileMoreAnchorEl,
	mobileMenuId,
	isMobileMenuOpen,
	handleMobileMenuClose,
	handleProfileMenuOpen,
	numberOfEmails,
	numberOfNotifications,
}) => {
	const { token } = useSelector((state: RootStoreType) => state.user);
	return (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			{token && (
				<MenuItem>
					<Mails number={numberOfEmails} />
					<p>Messages</p>
				</MenuItem>
			)}
			{token && (
				<MenuItem>
					<Notifications number={numberOfNotifications} />
					<p>Notifications</p>
				</MenuItem>
			)}

			<MenuItem onClick={handleProfileMenuOpen}>
				<Account />
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);
};

export default HeaderDesktopMenu;
