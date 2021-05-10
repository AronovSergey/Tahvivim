import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AlertType } from "./AlertTypes";

toast.configure();

const alert = (message: string, notificationType: AlertType) => {
	toast(message, {
		position: toast.POSITION.BOTTOM_CENTER,
		type: notificationType,
	});
};

export default alert;
