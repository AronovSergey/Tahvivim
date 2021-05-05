import React from "react";
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
		</Menu>
	);
};

export default HeaderProfileMenu;
