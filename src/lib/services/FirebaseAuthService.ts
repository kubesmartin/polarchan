// src/services/AuthService.ts
import type { IAuthService } from '../interfaces/IAuthService';
import { auth, db } from '$lib/firebase';
import {
	signInWithEmailAndPassword,
	signOut,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	updateProfile,
	sendEmailVerification
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { writable, type Writable } from 'svelte/store';
import type { IUserMetaInfo } from '$lib/interfaces/IUserMetaInfo';

export class FirebaseAuthService implements IAuthService {
	store: Writable<{ email: string; uid: string; displayName: string } | null> = writable(null);

	constructor() {
		onAuthStateChanged(auth, (user) => {
			if (!user) return this.store.set(null);
			const { email, uid, displayName } = user;
			if (email && uid && displayName) {
				this.store.set({ email, uid, displayName });
			} else {
				this.store.set(null);
			}
		});
	}

	async login(email: string, password: string): Promise<void> {
		const credentials = await signInWithEmailAndPassword(auth, email, password);
		if (!credentials.user.emailVerified) {
			throw new Error('Email not verified');
		}
		if (!credentials.user.email || !credentials.user.uid) {
			throw new Error('User has no email or uid');
		}
		this.store.set({
			email: credentials.user.email,
			uid: credentials.user.uid,
			displayName: credentials.user.displayName || ''
		});
	}

	async logout(): Promise<void> {
		await signOut(auth);
		this.store.set(null);
	}

	async register(email: string, password: string, meta: IUserMetaInfo): Promise<void> {
		const userCredential = await createUserWithEmailAndPassword(auth, email, password);

		await updateProfile(userCredential.user, {
			displayName: `${meta.firstName} ${meta.lastName}`
		});

		await setDoc(doc(db, 'users', userCredential.user.uid), {
			...meta
		});

		await sendEmailVerification(userCredential.user);
	}
}
