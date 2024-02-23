export abstract class PoliticalItem {
	/**
	 * Identifier of the subject
	 * @type {string} unique identifier
	 */
	id: string;

	/**
	 * Name of the item
	 * @type {string} name as given by the user
	 */
	name: string;

	/**
	 * Country of origin
	 * @type {string} country ISO 3166-1 alpha-2 code
	 */
	country: string;

	/**
	 * Date of release (at least the year should be given, if not the full date)
	 * @type {Date} date of release
	 */
	date: Date;

	/**
	 * Pointer to the type of election
	 * @type {string} type of election id pointing to the type of election
	 */
	typeOfElectionId: string;

	/**
	 * Pointer to the political subject
	 * @type {string} political subject id pointing to the political subject
	 */
	politicalSubjectId: string;

	/**
	 * Type of political item
	 * @type {string} type of political item name
	 */
	typeOfPoliticalItem: string;

	constructor(
		id: string,
		name: string,
		country: string,
		date: Date,
		typeOfElectionId: string,
		politicalSubjectId: string,
		typeOfPoliticalItem: string
	) {
		this.id = id;
		this.name = name;
		this.country = country;
		this.date = date;
		this.typeOfElectionId = typeOfElectionId;
		this.politicalSubjectId = politicalSubjectId;
		this.typeOfPoliticalItem = typeOfPoliticalItem;
	}
}
