<script lang="ts">
	import type { Writable } from 'svelte/store';
	import type { SignUpPersonalInfoFormType } from '$lib/stores/personalInfoStore';
	import type { SignUpInstituionInfoFormType } from '$lib/stores/personalInfoStore';
	import {
		createUserWithEmailAndPassword,
		updateProfile,
		sendEmailVerification
	} from 'firebase/auth';
	import { doc, setDoc } from 'firebase/firestore';
	import { auth, db } from '$lib/firebase';

	export let personalStore: Writable<SignUpPersonalInfoFormType>;
	export let institutionStore: Writable<SignUpInstituionInfoFormType>;

	const register = async () => {
		const { email, password, firstName, lastName } = $personalStore;
		const { institutionName, primaryDepartment, status } = $institutionStore;
		const { titlesAfter, titlesBefore } = $personalStore;

		if (
			!password ||
			!email ||
			!firstName ||
			!lastName ||
			!institutionName ||
			!primaryDepartment ||
			!status
		)
			throw new Error('Some mandatory fields are empty');

		const userCredential = await createUserWithEmailAndPassword(auth, email, password);

		await updateProfile(userCredential.user, {
			displayName: `${firstName} ${lastName}`
		});

		await setDoc(doc(db, 'users', userCredential.user.uid), {
			firstName,
			lastName,
			institutionName,
			primaryDepartment,
			status,
			titlesAfter,
			titlesBefore
		});

		await sendEmailVerification(userCredential.user);
	};
</script>

{#await register()}
	<p>Registering...</p>
{:then}
	<p>Registration successful</p>
{:catch error}
	<p>{error.message}</p>
{/await}
