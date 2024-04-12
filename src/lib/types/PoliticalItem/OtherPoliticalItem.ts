import type { PoliticalItem } from './PoliticalItem';
import type { PoliticalItemFilter } from './PoliticalItemFilter';
import { isString } from '../utility';

export interface OtherPoliticalItem extends PoliticalItem {
	/**
	 * Additional information
	 * @type {string} additional information (can be long)
	 */
	additionalInformation: string;

	type: 'other';
}

export const isValidOtherPoliticalItem = (item: PoliticalItem): item is OtherPoliticalItem => {
	if (!isString((item as OtherPoliticalItem).additionalInformation)) return false;
	return true;
};

export interface OtherPoliticalItemFilter extends PoliticalItemFilter {}
