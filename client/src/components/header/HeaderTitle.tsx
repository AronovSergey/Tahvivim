import React from "react";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const HeaderTitle = () => {
	const history = useHistory();

	return (
		<Typography
			variant="h4"
			noWrap
			onClick={() => history.push("/")}
			style={{ cursor: "pointer" }}
		>
			Tahvivim
		</Typography>
	);
};

export default HeaderTitle;
