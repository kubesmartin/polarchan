export const isObject = (value: unknown): value is Record<string, unknown> => {
	return typeof value === 'object' && value !== null;
};

export const isString = (value: unknown): value is string => {
	return typeof value === 'string';
};

/**
 * Is the given date a valid date format number of (YYYY)
 * @param date date to check
 * @returns {boolean} is the date a valid date format (YYYY)
 */
export const isValidDateFormat = (date: unknown): boolean => {
	return typeof date === 'number' && date.toString().length === 4;
};
