import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryNode } from "../data";
import { findCategory } from "../helpers/findCategory";

const initialCategoryState: CategoryNode = {
	id: "1",
	children: [
		{
			id: "2",
			children: [
				{
					id: "3",
					children: [],
				},
				{
					id: "4",
					children: [],
				},
			],
		},
		{
			id: "3",
			children: [],
		},
		{
			id: "3",
			children: [],
		},
	],
};

const categorySlice = createSlice({
	name: "category",
	initialState: initialCategoryState,
	reducers: {
		addCategory: (state, { payload }: PayloadAction<string>) => {
			const parentCategory = findCategory(state, payload);
			const newObj = {
				id: "hey",
				children: [],
			};
			parentCategory.children = [...parentCategory.children, newObj];
		},
	},
});

export const categoryActions = categorySlice.actions;

export default categorySlice;
