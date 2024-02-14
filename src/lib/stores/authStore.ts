import { writable } from 'svelte/store';
import type { User } from 'firebase/auth';
import type { Writable } from 'svelte/store';

/**
 * Firebase user object
 */
export const user: Writable<User | null> = writable(null);
