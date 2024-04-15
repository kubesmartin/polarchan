import type { IQueryService } from '$lib/interfaces/IQueryService';
import { createBaseQuery, executeQuery } from './firestoreServices';
import { db } from '$lib/firebase';
import type { DocumentData } from 'firebase/firestore';
import type { PoliticalItemFilterSaved } from '$lib/types/PoliticalItem/PoliticalItemFilter';

export class FirebaseQueryService implements IQueryService {
	get = async ({ table, userId }: { table: 'queries'; userId: string }) => {
		const baseQuery = createBaseQuery(db, 'users/' + userId + '/' + table);
		const querySnapshot = await executeQuery(baseQuery);
		return parseFirebaseQueries(querySnapshot.items);
	};
}

export const firebaseQueryService = new FirebaseQueryService();

export const parseFirebaseQueries = (documents: DocumentData[]): PoliticalItemFilterSaved[] => {
	const items: PoliticalItemFilterSaved[] = [];
	documents.forEach((doc) => {
		// @ts-expect-error - we know this is the shape of the data
		items.push({ ...doc });
	});
	return items;
};
