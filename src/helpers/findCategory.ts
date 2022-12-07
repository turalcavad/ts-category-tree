import { CategoryNode } from "../data";

export const findCategory = (obj: CategoryNode, id: string) => {
	return findCategoryRec([obj], id);
};

export const findCategoryRec = (arr: CategoryNode[], id: string) => {
	for (const obj of arr) {
		if (obj.id === id) return obj;
		const nestedObj: any = findCategoryRec(obj.children, id);
		if (nestedObj) {
			return nestedObj;
		}
	}
};
