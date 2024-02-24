import type { IUserMetaInfo } from './IUserMetaInfo';

export interface IAuthService {
	login(email: string, password: string): Promise<void>;
	logout(): Promise<void>;
	register(email: string, password: string, meta: IUserMetaInfo): Promise<void>;
	getCurrentUser(): { email: string; uid: string; displayName: string } | null;
}
