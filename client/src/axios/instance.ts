import axios from "axios";

declare module "axios" {
	export interface AxiosRequestConfig {
		baseURL?: string;
		email?: string;
		password?: string;
		headers?: any;
	}
}

export default axios.create({ baseURL: "api/" });
