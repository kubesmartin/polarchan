export interface SignUpPersonalInfoType {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	titlesBefore: string | null;
	titlesAfter: string | null;
}

export interface SignUpInstitutionInfoType {
	institutionName: string;
	primaryDepartment: string;
	status: string;
}
