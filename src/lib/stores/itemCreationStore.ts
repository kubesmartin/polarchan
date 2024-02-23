import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { PoliticalItem } from '../types/PoliticalItem/PoliticalItem';

export interface PoliticalItemForm {
	name: string | undefined;
	country: string | undefined;
	date: string | undefined;
	typeOfElectionId: string | undefined;
	politicalSubjectIds: string[];
	coalitionName: string | undefined;
	typeOfPoliticalItem: PoliticalItem['typeOfPoliticalItem'] | undefined;
	additionalInformation: string | undefined;
}

export const itemCreationStore: Writable<PoliticalItemForm> = writable({
	name: undefined,
	country: undefined,
	date: undefined,
	typeOfElectionId: undefined,
	politicalSubjectIds: [],
	coalitionName: undefined,
	typeOfPoliticalItem: undefined,
	additionalInformation: undefined
});

export const itemCreationFilesStore: Writable<File[]> = writable([]);
