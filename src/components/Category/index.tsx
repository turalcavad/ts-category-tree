import React from "react";
import { CategoryNode } from "../../data";
import { categoryActions } from "../../store/categorySlice";

import CategoryActions from "../CategoryActions";
import { useAppDispatch, useAppSelector } from "../../hooks";
import CreationActions from "../CreationActions";

const Category: React.FC<CategoryNode> = ({
	id,
	children,
	isCreated,
}: CategoryNode) => {
	const dispatch = useAppDispatch();

	const addCategoryHandler = () => {
		dispatch(categoryActions.addCategory(id));
	};

	return (
		<li>
			{!isCreated ? (
				<div className="category">
					<input type="text" />
					<CreationActions categoryId={id} />
				</div>
			) : (
				<div className="category">
					{id + "category"}
					<CategoryActions addCategoryHandler={addCategoryHandler} />
				</div>
			)}

			<ul>
				{(children ?? []).map((node: CategoryNode) => (
					<Category key={Math.random()} {...node} />
				))}
			</ul>
		</li>
	);
};

export default Category;
