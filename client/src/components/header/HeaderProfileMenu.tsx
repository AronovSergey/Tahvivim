import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootStoreType } from "../../redux/store";
import { logout } from "../../redux/actions/user.actions";

// MUI Stuff
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

interface Props {
	anchorEl: Element | null;
	menuId: string;
	isMenuOpen: boolean;
	handleMenuClose: () => void;
}

const HeaderProfileMenu: React.FC<Props> = ({
	anchorEl,
	isMenuOpen,
	handleMenuClose,
	menuId,
}) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { token } = useSelector((state: RootStoreType) => state.user);

	const onButtonClick = (route: string) => {
		handleMenuClose();
		history.push(`/${route}`);
	};

	const onLogoutClick = () => {
		handleMenuClose();
		dispatch(logout());
		history.push("/");
	};

	return (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			{!token && (
				<div>
					<MenuItem onClick={() => onButtonClick("signin")}>
						Sign In
					</MenuItem>
					<MenuItem onClick={() => onButtonClick("signup")}>
						Sign Up
					</MenuItem>
				</div>
			)}
			{token && (
				<div>
					<MenuItem onClick={() => onButtonClick("profile")}>
						Profile
					</MenuItem>
					<MenuItem onClick={() => onButtonClick("create")}>
						Create Activity
					</MenuItem>
					<MenuItem onClick={() => onButtonClick("my_activities")}>
						My Activities
					</MenuItem>

					<MenuItem onClick={() => onButtonClick("favorites")}>
						My Favorites
					</MenuItem>
					<MenuItem onClick={onLogoutClick}>Logout</MenuItem>
				</div>
			)}
		</Menu>
	);
};

export default HeaderProfileMenu;
