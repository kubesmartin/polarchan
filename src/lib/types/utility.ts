export const isObject = (value: unknown): value is Record<string, unknown> => {
	return typeof value === 'object' && value !== null;
};

export const isString = (value: unknown): value is string => {
	return typeof value === 'string';
};

/**
 * Is the given date a valid date format (YYYY-MM-DD)
 * @param date date to check
 * @returns {boolean} is the date a valid date format (YYYY-MM-DD)
 */
export const isValidDateFormat = (date: unknown): boolean => {
	if (!isString(date)) return false;
	return /^\d{4}-\d{2}-\d{2}$/.test(date);
};
