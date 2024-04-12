import type { Fields } from '$lib/config/meta';
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const itemCreationStore: Writable<Fields> = writable([]);

export const itemCreationFilesStore: Writable<File[]> = writable([]);
