import { isObject, isString } from '../utility';

export interface PoliticalSubject {
	/**
	 * Identifier of the subject
	 * @type {string} unique identifier
	 */
	id: string;

	/**
	 * Name of the subject
	 * @type {string} name as given by the user
	 */
	name: string;

	/**
	 * Country of origin
	 * @type {string} country ISO 3166-1 alpha-2 code
	 */
	country: string;

	/**
	 * Type of subject
	 * @type {string} type of subject name
	 */
	typeOfPoliticalSubject: string;
}

export const isValidPoliticalSubject = (subject: unknown): subject is PoliticalSubject => {
	if (!isObject(subject)) return false;
	if (!isString(subject.id)) return false;
	if (!isString(subject.name)) return false;
	if (!isString(subject.country)) return false;
	if (!isString(subject.typeOfPoliticalSubject)) return false;
	return true;
};
