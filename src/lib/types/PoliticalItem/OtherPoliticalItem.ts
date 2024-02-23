import type { PoliticalItem } from './PoliticalItem';

export interface OtherPoliticalItem extends PoliticalItem {
	/**
	 * Additional information
	 * @type {string} additional information (can be long)
	 */
	additionalInformation: string;
}
