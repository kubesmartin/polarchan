type DeepCopyable<T> = {
	[K in keyof T]: T[K] extends object ? DeepCopyable<T[K]> : T[K];
};

export function deepCopy<T extends DeepCopyable<T>>(obj: T): T {
	if (obj === null || typeof obj !== 'object') {
		return obj;
	}

	if (obj instanceof Array) {
		const arrCopy = [] as unknown as T;
		for (let i = 0; i < obj.length; i++) {
			(arrCopy as unknown as unknown[])[i] = deepCopy(obj[i]);
		}
		return arrCopy;
	}

	if (obj instanceof Function) {
		return obj;
	}

	const copy = {} as { [K in keyof T]: T[K] };
	for (const key in obj) {
		const val = obj[key];
		if (val instanceof Function) {
			copy[key] = val;
		} else if (val !== null && typeof val === 'object') {
			copy[key] = deepCopy(val);
		} else {
			copy[key] = val;
		}
	}
	return copy as T;
}
