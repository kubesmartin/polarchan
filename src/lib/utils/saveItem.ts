import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '$lib/firebase';
import type { Fields } from '$lib/config/meta';

export const saveItem = async (item: Fields, files: File[], uid: string): Promise<string> => {
	console.log('item', item);

	// Initialize Firebase services
	const storage = getStorage(app);
	const firestore = getFirestore(app);

	// Save files to Firebase Storage
	const storagePromises: Promise<string>[] = [];
	// const storageRefs = [] as string[];

	for (let i = 0; i < files.length; i++) {
		const file = files[i];
		const extension = file.name.split('.').pop();
		const storageRefPath = `materials/${uid}/${Date.now()}/${i}.${extension}`;
		const fileRef = storageRef(storage, storageRefPath);
		await uploadBytes(fileRef, file);
		const downloadUrl = await getDownloadURL(fileRef);
		storagePromises.push(Promise.resolve(downloadUrl));
	}

	// Wait for all storage promises to resolve
	const downloadUrls = await Promise.all(storagePromises);

	// Convert Fields to object with key:value pairs
	// where key is the id of the field and value is the value of the field
	const itemObject = item.reduce(
		(acc, field) => {
			acc[field.id] = field.value;
			return acc;
		},
		{} as Record<string, unknown>
	);

	// construct correct upload object with all key:value pairs defined
	const baseUploadObject = {
		...itemObject,
		files: downloadUrls,
		added: Date.now(),
		uid
	};

	// Save metadata to Firestore and return the ID
	const docRef = await addDoc(collection(firestore, 'political_items'), baseUploadObject);
	return Promise.resolve(docRef.id);
};
