export const ACTIVITIES_LOADING = "ACTIVITIES_LOADING";
export const ACTIVITIES_FAIL = "ACTIVITIES_FAIL";
export const ACTIVITIES_SUCCESS = "ACTIVITIES_SUCCESS";

export type AddressType = {
	city: string;
	address?: string;
};

export type ActivityType = {
	_id?: string;
	title: string;
	description: string;
	owner?: string;
	completed?: boolean;
	places: number;
	participants: number;
	address: AddressType;
};

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

export type ActivitiesDispatchTypes =
	| ActivitiesLoading
	| ActivitiesFail
	| ActivitiesSuccess;
