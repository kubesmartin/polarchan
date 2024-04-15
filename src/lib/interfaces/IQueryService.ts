import type { PoliticalItemFilterSaved } from '$lib/types/PoliticalItem/PoliticalItemFilter';

type QueryGetterQueriesInput = {
	table: 'queries';
	userId: string;
};

/** type which is a function */
type QueryGetterQueriesFunction = (
	queries: QueryGetterQueriesInput
) => Promise<PoliticalItemFilterSaved[]>;

export interface IQueryService {
	get: QueryGetterQueriesFunction;
}
