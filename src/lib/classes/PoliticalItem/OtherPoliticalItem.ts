import { PoliticalItem } from './PoliticalItem';

export class OtherPoliticalItem extends PoliticalItem {
	/**
	 * Additional information
	 * @type {string} additional information (can be long)
	 */
	additionalInformation: string;

	constructor(
		id: string,
		name: string,
		country: string,
		date: Date,
		typeOfElectionId: string,
		politicalSubjectId: string,
		additionalInformation: string
	) {
		super(id, name, country, date, typeOfElectionId, politicalSubjectId, 'other');
		this.additionalInformation = additionalInformation;
	}
}
