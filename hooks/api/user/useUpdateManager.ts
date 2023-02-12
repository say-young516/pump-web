import { APIResponse } from 'types/api';
import { API_PATH, HTTP_METHOD } from 'core/apis/constants';
import pumpClientRequester from 'core/apis/axios';
import { getUserTokenFromLocalStorage } from 'utils/storage';

type StoreImage = {
	id: number;
	storeId: number;
	path: string;
};

export type Store = {
	createdAt: string;
	modifiedAt: string;
	id: number;
	userId: number;
	name: string;
	status: string;
	latitude: string;
	longitude: string;
	businessHours: string;
	notice: string;
	address: string;
	instaAccount: string;
	callNumber: string;
	registrationNumber: string;
	isDayOff: boolean;
	isReady: boolean;
	imgStore: StoreImage[];
};

export interface StoreGetResponse extends APIResponse {
	data: {
		result: Store | null;
	};
}

export const getStore = async () => {
	const {
		user: { store },
	} = API_PATH;

	const response = await pumpClientRequester<StoreGetResponse>({
		method: HTTP_METHOD.GET,
		url: `${store}`,
		headers: {
			Authorization: `Bearer ${getUserTokenFromLocalStorage()}`,
		},
	});

	return response.data.data.result;
};
