import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import type { PoliticalItemForm } from '$lib/stores/itemCreationStore';
import { app } from '$lib/firebase';

export const saveItem = async (item: PoliticalItemForm, files: File[]): Promise<string> => {
	// Initialize Firebase services
	const storage = getStorage(app);
	const firestore = getFirestore(app);

	// Save files to Firebase Storage
	const storagePromises: Promise<string>[] = [];
	for (let i = 0; i < files.length; i++) {
		const file = files[i];
		const storageRefPath = `materials/${Date.now()}/${i}-${file.name}`;
		const fileRef = storageRef(storage, storageRefPath);
		await uploadBytes(fileRef, file);
		const downloadUrl = await getDownloadURL(fileRef);
		storagePromises.push(Promise.resolve(downloadUrl));
	}

	// Wait for all storage promises to resolve
	const downloadUrls = await Promise.all(storagePromises);

	// construct correct upload object with all key:value pairs defined
	const baseUploadObject = {
		country: item.country,
		year: item.electionYear,
		typeOfElectionId: item.typeOfElectionId,
		politicalSubjectIds: item.politicalSubjectIds,
		typeOfPoliticalItem: item.typeOfPoliticalItem,
		additionalInformation: item.additionalInformation,
		files: downloadUrls
	};

	let baseUploadObjectTwo;
	if (item.coalitionName) {
		baseUploadObjectTwo = { ...baseUploadObject, coalitionName: item.coalitionName };
	} else {
		baseUploadObjectTwo = { ...baseUploadObject };
	}

	// Save metadata to Firestore and return the ID
	const docRef = await addDoc(collection(firestore, 'political_items'), baseUploadObjectTwo);
	return Promise.resolve(docRef.id);
};
