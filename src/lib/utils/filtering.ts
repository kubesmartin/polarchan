export const filterInName = (
	transformedSearchText: string,
	option: { name: string; abbreviation?: string }
): boolean => option.name.toLowerCase().includes(transformedSearchText.toLowerCase());

/**
 * Filter options by abbreviation
 * If abbreviation is not provided, return true (include in the list)
 * @param option - option to filter
 */
export const filterInAbbreviation = (
	transformedSearchText: string,
	option: { name: string; abbreviation?: string }
): boolean =>
	option.abbreviation?.toLowerCase().includes(transformedSearchText.toLowerCase()) || false;

// Filter options excluding already selected values
export const updateFilteredOptions = (
	searchText: string,
	options: Array<{ id: string; name: string; abbreviation?: string }>,
	excludeIds: Array<string>
): Array<{ id: string; name: string; abbreviation?: string }> => {
	// lower case and remove white spaces, tabs, and new lines
	const transformedSearchText = searchText.toLowerCase().replace(/\s/g, '');
	const filteredOptions = options.filter(
		(option) =>
			(filterInName(transformedSearchText, option) ||
				filterInAbbreviation(transformedSearchText, option)) &&
			!excludeIds.includes(option.id)
	);
	return filteredOptions;
};
