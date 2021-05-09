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
				<>
					<MenuItem onClick={() => onButtonClick("login")}>
						Login
					</MenuItem>
					<MenuItem onClick={() => onButtonClick("signin")}>
						Signin
					</MenuItem>
				</>
			)}
			{token && (
				<>
					<MenuItem onClick={() => onButtonClick("profile")}>
						Profile
					</MenuItem>
					<MenuItem onClick={() => onButtonClick("my_activities")}>
						My Activities
					</MenuItem>
					<MenuItem onClick={() => onButtonClick("create")}>
						Create Activity
					</MenuItem>
					<MenuItem onClick={onLogoutClick}>Logout</MenuItem>
				</>
			)}
		</Menu>
	);
};

export default HeaderProfileMenu;
