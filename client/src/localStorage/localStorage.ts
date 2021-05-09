import { UserType } from "../redux/actionTypes/user.actionTypes";

export const createUserInstanceInLocalStorge = (
	token: string,
	user: UserType
) => {
	const myUser = {
		token,
		user,
	};
	localStorage.setItem("myUser", JSON.stringify(myUser));
};

export const getUserInstanceFromLocalStorge = () => {
	const myUser: string | null = localStorage.getItem("myUser");
	if (myUser) return JSON.parse(myUser);

	return null;
};

export const deleteUserInstanceFromLocalStorge = () => {
	localStorage.removeItem("myUser");
};
