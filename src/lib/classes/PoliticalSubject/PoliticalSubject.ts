export class PoliticalSubject {
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

	constructor(id: string, name: string, country: string, typeOfPoliticalSubject: string) {
		this.id = id;
		this.name = name;
		this.country = country;
		this.typeOfPoliticalSubject = typeOfPoliticalSubject;
	}
}
