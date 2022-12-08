export interface CategoryNode {
	id: number;
	parentId: number;
	name: string;
	children: CategoryNode[];
	isCreated: boolean;
}
