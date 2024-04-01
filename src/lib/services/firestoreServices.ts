import {
	collection,
	query,
	where,
	orderBy,
	startAfter,
	limit,
	getDocs,
	Firestore,
	QueryConstraint,
	type DocumentData,
	QueryDocumentSnapshot,
	type WhereFilterOp
} from 'firebase/firestore';

// Base query function to specify the collection
export const createBaseQuery = (
	db: Firestore,
	collectionName: string,
	...constraints: QueryConstraint[]
) => {
	return query(collection(db, collectionName), ...constraints);
};

// Function to add filtering conditions
export const withFilter = (
	field: string,
	operator: WhereFilterOp,
	value: unknown
): QueryConstraint => {
	return where(field, operator, value);
};

// Function to add sorting
export const withOrderBy = (field: string, direction: 'asc' | 'desc' = 'asc'): QueryConstraint => {
	return orderBy(field, direction);
};

// Function to add pagination
export const withLimit = (count: number): QueryConstraint => {
	return limit(count);
};

// Execute query with optional pagination
export const executeQuery = async (
	baseQuery: ReturnType<typeof createBaseQuery>,
	lastVisible: QueryDocumentSnapshot<DocumentData> | null = null
) => {
	let finalQuery = baseQuery;

	if (lastVisible) {
		finalQuery = query(finalQuery, startAfter(lastVisible));
	}

	const querySnapshot = await getDocs(finalQuery);
	const items: DocumentData[] = [];
	let newLastVisible: QueryDocumentSnapshot<DocumentData> | null = null;

	querySnapshot.forEach((doc) => {
		items.push({ id: doc.id, ...doc.data() });
		newLastVisible = doc;
	});

	return { items, lastVisible: newLastVisible };
};
