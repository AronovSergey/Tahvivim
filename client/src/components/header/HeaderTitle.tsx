import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
	title: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
}));

const HeaderTitle = () => {
	const classes = useStyles();
	const history = useHistory();

	return (
		<Typography
			className={classes.title}
			variant="h4"
			noWrap
			onClick={() => history.push("/")}
		>
			Tahvivim
		</Typography>
	);
};

export default HeaderTitle;
