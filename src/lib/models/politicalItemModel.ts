import {
	createBaseQuery,
	withFilter,
	withOrderBy,
	withLimit,
	executeQuery
} from '$lib/services/firestoreServices';
import { db } from '$lib/firebase';
import type { QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';

export const getPoliticalItems = async (
	lastVisible: QueryDocumentSnapshot<DocumentData> | null = null,
	limit: number = 10
) => {
	const baseQuery = createBaseQuery(
		db,
		'political_items',
		withOrderBy('year', 'desc'),
		withLimit(limit)
	);
	return executeQuery(baseQuery, lastVisible);
};
