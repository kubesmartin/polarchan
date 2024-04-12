import type { PoliticalItem } from './PoliticalItem';

export interface PoliticalItemFilter {
	/**
	 * The type of political item to filter by
	 * Equals query to typeOfPoliticalItem
	 * To simplify the query, we only allow one type of political item.
	 * If combining queries, use the same type of political item for all queries!
	 */
	type: PoliticalItem['type'] | null;

	/**
	 * The year range to filter by
	 * From is inclusive, to is exclusive
	 */
	year: {
		from: PoliticalItem['year'] | null;
		to: PoliticalItem['year'] | null;
	};

	/**
	 * The political party to filter by
	 * Array-contains query
	 */
	politicalParty: PoliticalItem['politicalSubjectIds'];

	/**
	 * The election type to filter by
	 * In query
	 */
	electionType: Array<PoliticalItem['typeOfElectionId']>;

	/**
	 * Order by year or added date
	 */
	order: {
		by: 'year' | 'added';
		direction: 'asc' | 'desc';
	};
}
