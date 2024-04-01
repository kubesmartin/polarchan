import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { PoliticalItem } from '../types/PoliticalItem/PoliticalItem';

export interface PoliticalItemForm {
	name: string | undefined;
	country: string | undefined;
	typeOfElectionId: string | undefined;
	electionYear: number | undefined;
	politicalSubjectIds: string[];
	coalitionName: string | undefined;
	typeOfPoliticalItem: PoliticalItem['typeOfPoliticalItem'] | undefined;
	additionalInformation: string | undefined;
}

export const itemCreationStore: Writable<PoliticalItemForm> = writable({
	name: undefined,
	country: 'cz',
	typeOfElectionId: undefined,
	politicalSubjectIds: [],
	coalitionName: undefined,
	typeOfPoliticalItem: undefined,
	additionalInformation: undefined,
	electionYear: new Date().getFullYear()
});

export const itemCreationFilesStore: Writable<File[]> = writable([]);
