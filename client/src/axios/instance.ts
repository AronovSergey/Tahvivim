import axios from "axios";
import { AddressType } from "../redux/actionTypes/activities.actionTypes";

declare module "axios" {
	export interface AxiosRequestConfig {
		baseURL?: string;
		email?: string;
		password?: string;
		headers?: any;
		title?: string;
		description?: string;
		places?: number;
		participants?: number;
		address?: AddressType;
	}
}

export default axios.create({ baseURL: "api/" });
