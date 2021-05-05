import React from "react";
import { useHistory } from "react-router-dom";

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

	const onLoginClick = () => {
		handleMenuClose();
		history.push("/login");
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
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
			<MenuItem onClick={onLoginClick}>Login</MenuItem>
		</Menu>
	);
};

export default HeaderProfileMenu;
