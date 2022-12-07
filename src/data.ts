export interface CategoryNode {
	id: string;
	children: CategoryNode[];
}

export const root: CategoryNode = {
	id: "1",
	children: [
		{
			id: "2",
			children: [
				{
					id: "4",
					children: [],
				},
			],
		},
		{
			id: "3",
			children: [
				{
					id: "5",
					children: [],
				},
			],
		},
		{
			id: "6",
			children: [],
		},
	],
};
