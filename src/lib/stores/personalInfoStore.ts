import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export interface SignUpPersonalInfoFormType {
	firstName: string | undefined;
	lastName: string | undefined;
	email: string | undefined;
	password: string | undefined;
	passwordConfirm: string | undefined;
	titlesBefore: string | undefined;
	titlesAfter: string | undefined;
}

export interface SignUpInstituionInfoFormType {
	institutionName: string | undefined;
	primaryDepartment: string | undefined;
	status: string | undefined;
}

export const personalInfoFormData: Writable<SignUpPersonalInfoFormType> = writable({
	firstName: undefined,
	lastName: undefined,
	email: undefined,
	password: undefined,
	passwordConfirm: undefined,
	titlesBefore: undefined,
	titlesAfter: undefined
});

export const institutionInfoFormData: Writable<SignUpInstituionInfoFormType> = writable({
	institutionName: undefined,
	primaryDepartment: undefined,
	status: undefined
});
