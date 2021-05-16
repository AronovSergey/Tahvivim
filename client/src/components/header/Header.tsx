import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Header.css";
import { RootStoreType } from "../../redux/store";

// Components
import Title from "./HeaderTitle";
import HeaderProfileMenu from "./HeaderProfileMenu";
import HeaderMobileMenu from "./HeaderMobileMenu";
import { Mails, Notifications } from "./HeaderIcons";

// MUI Stuff
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},
	sectionMobile: {
		display: "flex",
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
}));

const Header = () => {
	const classes = useStyles();
	const { token, user } = useSelector((state: RootStoreType) => state.user);
	const numberOfEmails: number = 4;
	const numberOfNotifications: number = 12;

	// ************ Mobile Menu Section *************
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
		useState<Element | null>(null);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
	const mobileMenuId = "primary-search-account-menu-mobile";
	const handleMobileMenuOpen = (event: React.MouseEvent<{}>) => {
		setMobileMoreAnchorEl(event.currentTarget as Element);
	};
	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	// ************ Desktop Menu Section ************
	const [anchorEl, setAnchorEl] = useState<Element | null>(null);
	const isMenuOpen = Boolean(anchorEl);
	const menuId = "primary-search-account-menu";
	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	// ************ Profile Menu Section ************
	const handleProfileMenuOpen = (event: React.MouseEvent<{}>) => {
		setAnchorEl(event.currentTarget as Element);
	};

	return (
		<div className={classes.grow}>
			<AppBar position="static">
				<Toolbar>
					<Title />
					<div className={classes.grow} />

					<div className={classes.sectionDesktop}>
						{token && (
							<>
								<Mails number={numberOfEmails} />
								<Notifications number={12} />
							</>
						)}
						<IconButton
							edge="end"
							aria-label="account of current user"
							aria-controls={menuId}
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="inherit"
						>
							{token && (
								<div className="name_insals">
									{user.name
										.split(" ")
										.map((word) => word[0].toUpperCase())
										.join(" ")}
								</div>
							)}
							{!token && <AccountCircle />}
						</IconButton>
					</div>

					<div className={classes.sectionMobile}>
						<IconButton
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit"
						>
							<MoreIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			<HeaderMobileMenu
				mobileMoreAnchorEl={mobileMoreAnchorEl}
				mobileMenuId={mobileMenuId}
				isMobileMenuOpen={isMobileMenuOpen}
				handleMobileMenuClose={handleMobileMenuClose}
				handleProfileMenuOpen={handleProfileMenuOpen}
				numberOfEmails={numberOfEmails}
				numberOfNotifications={numberOfNotifications}
			/>
			<HeaderProfileMenu
				anchorEl={anchorEl}
				menuId={menuId}
				isMenuOpen={isMenuOpen}
				handleMenuClose={handleMenuClose}
			/>
		</div>
	);
};

export default Header;
