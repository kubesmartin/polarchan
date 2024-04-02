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
	type: 'mass-printed' | 'spot' | 'other';

	/**
	 * Date of the political item
	 * @type {number} date in ISO 8601 format
	 */
	year: number;

	added: number;

	uid: string;

	files: string[];
}

export const isValidPoliticalItem = (item: unknown): item is PoliticalItem => {
	if (!isObject(item)) throw new Error('Not an object');
	if (!isString(item.id)) throw new Error('Invalid id');
	if (!isString(item.country)) throw new Error('Invalid country');
	if (!isValidDateFormat(item.year)) throw new Error('Invalid year');
	if (!isString(item.typeOfElectionId)) throw new Error('Invalid typeOfElectionId');
	if (!isValidPoliticalSubjectIds(item.politicalSubjectIds))
		throw new Error('Invalid politicalSubjectIds');
	if (!isValidPoliticalItemType(item.type)) throw new Error('Invalid type');
	return true;
};

export const isValidPoliticalItemType = (type: unknown): type is PoliticalItem['type'] => {
	return isString(type) && ['mass-printed', 'spot', 'other'].includes(type);
};

export const isValidPoliticalSubjectIds = (
	ids: unknown
): ids is PoliticalItem['politicalSubjectIds'] => {
	return Array.isArray(ids) && ids.every((id) => isString(id));
};
