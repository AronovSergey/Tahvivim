export const ACTIVITIES_LOADING = "ACTIVITIES_LOADING";
export const ACTIVITIES_FAIL = "ACTIVITIES_FAIL";
export const ACTIVITIES_SUCCESS = "ACTIVITIES_SUCCESS";
export const UPDATE_SEARCH_PARAMS = "UPDATE_SEARCH_PARAMS";
export const ACTIVITIES_UPDATE_SUCCESS = "ACTIVITIES_UPDATE_SUCCESS";
export const UPDATE_FAVORITES = "UPDATE_FAVORITES";

export type AddressType = {
	city: string;
	address?: string;
};

export interface ActivityType {
	_id: string;
	title: string;
	description: string;
	owner?: string;
	ownerName?: string;
	category?: string;
	subcategory?: string;
	completed?: boolean;
	places: number;
	participants: number;
	address: AddressType;
	createdAt?: string;
	updatedAt?: string;
	date: Date;
}

export interface ActivitiesLoading {
	type: typeof ACTIVITIES_LOADING;
}

export interface ActivitiesFail {
	type: typeof ACTIVITIES_FAIL;
}

export interface ActivitiesSuccess {
	type: typeof ACTIVITIES_SUCCESS;
	payload: { activities: ActivityType[] };
}

export interface ActivitiesUpdateSuccess {
	type: typeof ACTIVITIES_UPDATE_SUCCESS;
	payload: { activity: ActivityType };
}

export interface UpdateSearchParams {
	type: typeof UPDATE_SEARCH_PARAMS;
	payload: {
		searchTerm: string | undefined;
		category: string | undefined;
		subcategory: string | undefined;
	};
}

export type ActivitiesDispatchTypes =
	| ActivitiesLoading
	| ActivitiesFail
	| ActivitiesSuccess
	| UpdateSearchParams
	| ActivitiesUpdateSuccess;
