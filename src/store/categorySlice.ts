import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryNode } from "../models/category";
import { findCategory } from "../helpers/findCategory";

interface State {
	categories: CategoryNode;
	inProgress: boolean;
}

const initialCategoryState: State = {
	categories: {
		id: 1,
		parentId: 0,
		name: "Categories",
		children: [],
		isCreated: true,
	},
	inProgress: false,
};

const categorySlice = createSlice({
	name: "category",
	initialState: initialCategoryState,
	reducers: {
		addCategory: (state, { payload }: PayloadAction<number>) => {
			const parentId = payload;
			const parentCategory = findCategory(state.categories, parentId);
			const newCategory = {
				id: Math.random(),
				children: [],
				isCreated: false,
				parentId: parentId,
			};
			parentCategory.children = [...parentCategory.children, newCategory];
			state.inProgress = true;
		},
		submitCategory: (
			state,
			{ payload }: PayloadAction<{ categoryId: number; categoryName: string }>
		) => {
			const category = findCategory(state.categories, payload.categoryId);
			category.isCreated = true;
			category.name = payload.categoryName;
			state.inProgress = false;
		},
		removeCategory: (
			state,
			{ payload }: PayloadAction<{ parentId: number; categoryId: number }>
		) => {
			const parentCategory = findCategory(state.categories, payload.parentId);

			parentCategory.children = parentCategory.children.filter(
				(c: CategoryNode) => c.id !== payload.categoryId
			);
			state.inProgress = false;
		},
		editCategory: (
			state,
			{
				payload,
			}: PayloadAction<{
				categoryId: number;
				parentId: number;
				newName: string;
			}>
		) => {
			const category = findCategory(state.categories, payload.categoryId);
			category.isCreated = false;
		},
	},
});

export const categoryActions = categorySlice.actions;

export default categorySlice;
