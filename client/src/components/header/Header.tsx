import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
		cursor: "pointer",
		fontSize: "32px",
	},
}));

const Header = () => {
	const classes = useStyles();
	const history = useHistory();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography
						className={classes.title}
						variant="h5"
						noWrap
						onClick={() => history.push("/")}
					>
						Tahvivim
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
