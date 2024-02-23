import type { PoliticalItem } from './PoliticalItem';

export interface PoliticalItemForm {
	country: string | undefined;
	date: string | undefined;
	typeOfElectionId: string | undefined;
	politicalSubjectIds: string[] | undefined;
	coalitionName: string | null | undefined;
	typeOfPoliticalItem: PoliticalItem['typeOfPoliticalItem'] | undefined;
	additionalInformation: string | undefined;
}
