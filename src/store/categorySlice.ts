import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryNode } from "../data";
import { findCategory } from "../helpers/findCategory";

interface State {
	categories: CategoryNode;
}

const initialCategoryState: State = {
	categories: {
		id: 1,
		children: [
			{
				id: 2,
				children: [],
				isCreated: true,
			},
			{
				id: 3,
				children: [],
				isCreated: true,
			},
		],
		isCreated: true,
	},
};

const categorySlice = createSlice({
	name: "category",
	initialState: initialCategoryState,
	reducers: {
		addCategory: (state, { payload }: PayloadAction<number>) => {
			const parentCategory = findCategory(state.categories, payload);
			const newCategory = {
				id: Math.random().toFixed(4),
				children: [],
				isCreated: false,
			};
			parentCategory.children = [...parentCategory.children, newCategory];
		},
		submitCategory: (state, { payload }: PayloadAction<number>) => {
			const category = findCategory(state.categories, payload);
			category.isCreated = true;
		},
	},
});

export const categoryActions = categorySlice.actions;

export default categorySlice;
