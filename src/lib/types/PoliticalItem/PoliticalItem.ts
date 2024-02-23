import { isObject, isString, isValidDateFormat } from '../utility';

export interface PoliticalItem {
	/**
	 * Identifier of the subject
	 * @type {string} unique identifier
	 */
	id: string;

	/**
	 * Country of origin
	 * @type {string} country ISO 3166-1 alpha-2 code
	 */
	country: string;

	/**
	 * Date of release (at least the year should be given, if not the full date)
	 * @type {string} in YYYY-MM-DD format
	 */
	date: Date;

	/**
	 * Pointer to the type of election
	 * @type {string} type of election id pointing to the type of election
	 */
	typeOfElectionId: string;

	/**
	 * Pointer to the political subject
	 * @type {string[]} ids pointing to the political subject
	 */
	politicalSubjectIds: string[];

	/**
	 * Coalition name, if more than one political subject is involved
	 * @type {string | null} coalition name if applicable
	 */
	coalitionName: string | null;

	/**
	 * Type of political item
	 * @type {string} type of political item name
	 */
	typeOfPoliticalItem: 'mass-printed' | 'spot' | 'other';
}

export const isValidPoliticalItem = (item: unknown): item is PoliticalItem => {
	if (!isObject(item)) return false;
	if (!isString(item.id)) return false;
	if (!isString(item.country)) return false;
	if (!isValidDateFormat(item.date)) return false;
	if (!isString(item.typeOfElectionId)) return false;
	if (!isString(item.politicalSubjectId)) return false;
	if (!isString(item.typeOfPoliticalItem)) return false;
	if (!isValidPoliticalItemType(item.type)) return false;
	return true;
};

const isValidPoliticalItemType = (type: unknown): type is PoliticalItem['typeOfPoliticalItem'] => {
	return isString(type) && ['mass-printed', 'spot', 'other'].includes(type);
};
