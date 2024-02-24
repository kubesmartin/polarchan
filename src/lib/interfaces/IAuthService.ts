import type { IUserMetaInfo } from './IUserMetaInfo';
import type { Writable } from 'svelte/store';

export interface IAuthService {
	login(email: string, password: string): Promise<void>;
	logout(): Promise<void>;
	register(email: string, password: string, meta: IUserMetaInfo): Promise<void>;
	store: Writable<{ email: string; uid: string; displayName: string } | null>;
}
