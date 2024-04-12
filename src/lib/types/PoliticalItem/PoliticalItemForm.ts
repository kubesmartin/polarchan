import type { PoliticalItem } from './PoliticalItem';

export interface PoliticalItemForm {
	country: string | undefined;
	date: string | undefined;
	typeOfElectionId: string | undefined;
	politicalSubjectIds: string[] | undefined;
	coalitionName: string | null | undefined;
	typeOfPoliticalItem: PoliticalItem['type'] | undefined;
	additionalInformation: string | undefined;
}
