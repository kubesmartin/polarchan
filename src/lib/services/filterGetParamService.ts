import {
	isValidPoliticalItemType,
	type PoliticalItem
} from '$lib/types/PoliticalItem/PoliticalItem';
import type { PoliticalItemFilter } from '$lib/types/PoliticalItem/PoliticalItemFilter';

export const getFilterFromUrl = (parametersInGet: URLSearchParams): PoliticalItemFilter => {
	const typeGet = parametersInGet.get('type');
	const type = isValidPoliticalItemType(typeGet) ? typeGet : null;

	const yearFrom = parametersInGet.get('yearFrom');
	const yearTo = parametersInGet.get('yearTo');
	const year = {
		from: yearFrom ? parseInt(yearFrom) : null,
		to: yearTo ? parseInt(yearTo) : null
	};

	const politicalPartyGet = parametersInGet.get('politicalSubjectIds');
	const politicalParty = politicalPartyGet
		? (politicalPartyGet.split(',') as PoliticalItem['politicalSubjectIds'])
		: [];

	const electionTypeGet = parametersInGet.get('electionType');
	const electionType = electionTypeGet ? electionTypeGet.split(',') : [];

	const orderDirectionGet = parametersInGet.get('orderDirection');
	const orderDirectionIsValid = orderDirectionGet === 'asc' || orderDirectionGet === 'desc';
	const orderDirection = orderDirectionIsValid ? (orderDirectionGet as 'asc' | 'desc') : 'desc';

	const orderByGet = parametersInGet.get('orderBy');
	const orderByIsValid = orderByGet === 'year' || orderByGet === 'added';
	const orderBy = orderByIsValid ? (orderByGet as 'year' | 'added') : 'year';

	const order = {
		by: orderBy,
		direction: orderDirection
	};

	return {
		type,
		year,
		politicalParty,
		electionType,
		order
	};
};

export const getFilterUrl = (filter: PoliticalItemFilter): URLSearchParams => {
	const parameters = new URLSearchParams();

	if (filter.type) parameters.set('type', filter.type);
	if (filter.year.from) parameters.set('yearFrom', filter.year.from.toString());
	if (filter.year.to) parameters.set('yearTo', filter.year.to.toString());
	if (filter.politicalParty.length > 0)
		parameters.set('politicalSubjectIds', filter.politicalParty.join(','));
	if (filter.electionType.length > 0) parameters.set('electionType', filter.electionType.join(','));
	parameters.set('orderDirection', filter.order.direction);
	parameters.set('orderBy', filter.order.by);

	return parameters;
};
