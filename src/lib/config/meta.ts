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
		id: 'subjectName',
		type: 'text',
		label: 'Subject name',
		placeholder: 'Enter subject name (coaltion or person)',
		value: '',
		required: false,
		case: (fields: Fields) =>
			checkCondition(fields, 'politicalSubjectIds', (value) =>
				Array.isArray(value) ? (value.length > 1 ? true : value.includes('other')) : false
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
		id: 'massPrintedType',
		type: 'select',
		label: 'Type of mass-printed material',
		options: [
			{ id: 'poster', name: 'Poster' },
			{ id: 'flyer', name: 'Flyer' },
			{ id: 'brochure', name: 'Brochure' },
			{ id: 'outdoor', name: 'Outdoor' },
			{ id: 'other', name: 'Other' }
		],
		value: '',
		required: true,
		placeholder: 'Select type of mass-printed material',
		case: (fields: Fields) => checkCondition(fields, 'type', (value) => value === 'mass-printed')
	},
	{
		id: 'sentiment',
		type: 'select',
		label: 'Sentiment',
		options: [
			{ id: 'positive', name: 'Positive' },
			{ id: 'negative', name: 'Negative' },
			{ id: 'neutral', name: 'Neutral' },
			{ id: 'other', name: 'Other / Hard to say' }
		],
		value: '',
		required: true,
		placeholder: 'Select sentiment',
		case: (fields: Fields) =>
			checkCondition(fields, 'type', (value) => value === 'mass-printed' || value === 'spot')
	},
	{
		id: 'campaignType',
		type: 'select-multiple',
		label: 'Campaign type',
		options: [
			{ id: 'product', name: 'Product campaign' },
			{ id: 'negative', name: 'Negative campaign' },
			{ id: 'comparison', name: 'Comparison campaign' },
			{ id: 'image', name: 'Image campaign' }
		],
		value: [],
		required: false,
		placeholder: 'Select campaign type (type space to see all options)',
		case: (fields: Fields) =>
			checkCondition(fields, 'type', (value) => value === 'mass-printed' || value === 'spot')
	},
	{
		id: 'mainMessage',
		type: 'text',
		label: 'Main message',
		placeholder: 'Enter main message',
		value: '',
		required: false,
		case: (fields: Fields) => checkCondition(fields, 'type', (value) => value === 'mass-printed')
	},
	{
		id: 'programmePriorities',
		type: 'select-multiple',
		label: 'Select programme priorities (can select multiple or leave empty if not applicable)',
		placeholder: 'Select programme priorities (optional)',
		options: [
			{ id: 'economy', name: 'Economy' },
			{ id: 'health', name: 'Health' },
			{ id: 'education', name: 'Education' },
			{ id: 'security', name: 'Security' },
			{ id: 'foreign-affairs', name: 'Foreign affairs' },
			{ id: 'social-affairs', name: 'Social affairs' },
			{ id: 'environment', name: 'Environment' },
			{ id: 'justice', name: 'Justice' },
			{ id: 'other', name: 'Other' }
		],
		value: [],
		required: false,
		case: (fields: Fields) =>
			checkCondition(fields, 'type', (value) => value === 'mass-printed' || value === 'spot')
	},
	{
		id: 'dominantColour',
		type: 'select',
		label: 'Dominant colour',
		options: [
			{ id: 'red', name: 'Red' },
			{ id: 'blue', name: 'Blue' },
			{ id: 'green', name: 'Green' },
			{ id: 'yellow', name: 'Yellow' },
			{ id: 'black', name: 'Black' },
			{ id: 'white', name: 'White' },
			{ id: 'orange', name: 'Orange' },
			{ id: 'purple', name: 'Purple' },
			{ id: 'pink', name: 'Pink' },
			{ id: 'brown', name: 'Brown' },
			{ id: 'grey', name: 'Grey' },
			{ id: 'mixed', name: 'Mixed' },
			{ id: 'other', name: 'Other' }
		],
		value: '',
		required: true,
		placeholder: 'Select dominant colour',
		case: (fields: Fields) => checkCondition(fields, 'type', (value) => value === 'mass-printed')
	},
	{
		id: 'otherProminentColours',
		type: 'select-multiple',
		label: 'Select other prominent colours (can select multiple or leave empty if not applicable)',
		placeholder: 'Select other prominent colours (optional)',
		options: [
			{ id: 'red', name: 'Red' },
			{ id: 'blue', name: 'Blue' },
			{ id: 'green', name: 'Green' },
			{ id: 'yellow', name: 'Yellow' },
			{ id: 'black', name: 'Black' },
			{ id: 'white', name: 'White' },
			{ id: 'orange', name: 'Orange' },
			{ id: 'purple', name: 'Purple' },
			{ id: 'pink', name: 'Pink' },
			{ id: 'brown', name: 'Brown' },
			{ id: 'grey', name: 'Grey' },
			{ id: 'mixed', name: 'Mixed' },
			{ id: 'other', name: 'Other' }
		],
		value: [],
		required: false,
		case: (fields: Fields) => checkCondition(fields, 'type', (value) => value === 'mass-printed')
	},
	{
		id: 'faceCount',
		type: 'number',
		label: 'How many faces are on the material?',
		placeholder: 'Enter number of faces',
		value: 0,
		required: true,
		case: (fields: Fields) => checkCondition(fields, 'type', (value) => value === 'mass-printed')
	},
	{
		id: 'hasFaceOfCandidate',
		type: 'select',
		label: 'Does the material contain a face of a candidate?',
		options: [
			{ id: 'yes', name: 'Yes' },
			{ id: 'no', name: 'No' }
		],
		value: '',
		required: false,
		placeholder: 'Select an option',
		case: (fields: Fields) => checkCondition(fields, 'faceCount', (value) => Number(value) > 0)
	},
	{
		id: 'hasFaceOfLeader',
		type: 'select',
		label: 'Does the material contain a face of a party/coalition leader?',
		options: [
			{ id: 'yes', name: 'Yes' },
			{ id: 'no', name: 'No' }
		],
		value: '',
		required: false,
		placeholder: 'Select an option',
		case: (fields: Fields) => checkCondition(fields, 'faceCount', (value) => Number(value) > 0)
	},
	{
		id: 'genderRepresentation',
		type: 'select',
		label: 'What is the gender representation on the material?',
		options: [
			{ id: 'male', name: 'All male' },
			{ id: 'male-mostly', name: 'Mostly male' },
			{ id: 'equal', name: 'Equal' },
			{ id: 'female-mostly', name: 'Mostly female' },
			{ id: 'female', name: 'All female' },
			{ id: 'other', name: 'Other' }
		],
		value: '',
		required: false,
		placeholder: 'Select an option',
		case: (fields: Fields) => checkCondition(fields, 'faceCount', (value) => Number(value) > 0)
	},
	{
		id: 'hasNationalSymbols',
		type: 'select',
		label: 'Does the material contain national symbols?',
		options: [
			{ id: 'yes', name: 'Yes' },
			{ id: 'no', name: 'No' }
		],
		value: '',
		required: false,
		placeholder: 'Select an option',
		case: (fields: Fields) =>
			checkCondition(fields, 'type', (value) => value === 'mass-printed' || value === 'spot')
	},
	{
		id: 'hasClientContractorInfo',
		type: 'select',
		label: 'Does the material contain client/contractor information?',
		options: [
			{ id: 'yes-yes', name: 'Yes, client and contractor' },
			{ id: 'yes-no', name: 'Only client' },
			{ id: 'no-yes', name: 'Only contractor' },
			{ id: 'no-no', name: 'No' }
		],
		value: '',
		required: false,
		placeholder: 'Select an option',
		case: (fields: Fields) =>
			checkCondition(fields, 'type', (value) => value === 'mass-printed' || value === 'spot')
	},
	{
		id: 'contractor',
		type: 'text',
		label: 'Contractor',
		placeholder: 'Enter contractor',
		value: '',
		required: false,
		case: (fields: Fields) =>
			checkCondition(
				fields,
				'hasClientContractorInfo',
				(value) => value === 'no-yes' || value === 'yes-yes'
			)
	},
	{
		id: 'client',
		type: 'text',
		label: 'Client',
		placeholder: 'Enter client',
		value: '',
		required: false,
		case: (fields: Fields) =>
			checkCondition(
				fields,
				'hasClientContractorInfo',
				(value) => value === 'yes-no' || value === 'yes-yes'
			)
	},
	{
		id: 'scanningDevice',
		type: 'text',
		label: 'Scanning device',
		placeholder: 'Enter scanning device',
		value: '',
		required: false,
		case: (fields: Fields) => checkCondition(fields, 'type', (value) => value === 'mass-printed')
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
