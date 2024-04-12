import { czechPoliticalSubjects } from '$lib/consts/czechPoliticalSubjects';
import { electionTypes } from '$lib/consts/electionTypes';

export type Fields = Array<SelectField | SelectMultipleField | TextField | NumberField>;

type SelectField = {
	id: string;
	type: 'select';
	label: string;
	placeholder: string;
	options: { id: string; name: string }[];
	value: string;
	required: boolean;
	disabled?: boolean;
	case?: (fields: Fields) => boolean;
};

type SelectMultipleField = {
	id: string;
	type: 'select-multiple';
	label: string;
	placeholder: string;
	options: { id: string; name: string }[];
	value: string[];
	required: boolean;
	case?: (fields: Fields) => boolean;
};

type TextField = {
	id: string;
	type: 'text';
	label: string;
	placeholder: string;
	value: string;
	required: boolean;
	case?: (fields: Fields) => boolean;
};

type NumberField = {
	id: string;
	type: 'number';
	label: string;
	placeholder: string;
	value: number;
	required: boolean;
	case?: (fields: Fields) => boolean;
};

const checkCondition = (fields: Fields, id: string, condition: (value: unknown) => boolean) => {
	const field = fields.find((f) => f.id === id);
	if (!field) return false;
	return condition(field.value);
};

export const fieldsInMeta: Fields = [
	{
		id: 'country',
		type: 'select',
		label: 'Country',
		placeholder: 'Select country',
		options: [{ id: 'cz', name: 'Czech Republic' }],
		value: 'cz',
		required: true,
		disabled: true
	},
	{
		id: 'typeOfElectionId',
		type: 'select',
		label: 'Type of election',
		placeholder: 'Select type of election',
		options: electionTypes,
		value: '',
		required: true
	},
	{
		id: 'year',
		type: 'number',
		label: 'Year of election',
		placeholder: 'Enter year of election',
		value: new Date().getFullYear(),
		required: true
	},
	{
		id: 'politicalSubjectIds',
		type: 'select-multiple',
		label: 'Political subjects',
		placeholder: 'Select political subjects',
		options: czechPoliticalSubjects,
		value: [],
		required: true
	},
	{
		id: 'coalitionName',
		type: 'text',
		label: 'Coalition name',
		placeholder: 'Enter coalition name',
		value: '',
		required: false,
		case: (fields: Fields) =>
			checkCondition(fields, 'politicalSubjectIds', (value) =>
				Array.isArray(value) ? value.length > 1 : false
			)
	},
	{
		id: 'type',
		type: 'select',
		label: 'Type of political item',
		options: [
			{ id: 'mass-printed', name: 'Mass-printed material' },
			{ id: 'spot', name: 'Spot' },
			{ id: 'publication', name: 'Publication' },
			{ id: 'other', name: 'Other' }
		],
		value: '',
		required: true,
		placeholder: 'Select type of political item'
	},
	{
		id: 'additionalInformation',
		type: 'text',
		label: 'Additional information',
		placeholder: 'Enter additional information',
		value: '',
		required: false,
		case: (fields: Fields) => checkCondition(fields, 'type', (value) => value !== '')
	}
];
