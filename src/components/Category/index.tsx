import React from "react";
import { CategoryNode } from "../../models/category";
import { categoryActions } from "../../store/categorySlice";
import { useState } from "react";
import CategoryActions from "../CategoryActions";
import { useAppDispatch, useAppSelector } from "../../hooks";
import CreationActions from "../CreationActions";

const Category: React.FC<CategoryNode> = ({
	id,
	children,
	isCreated,
	name,
	parentId,
}: CategoryNode) => {
	const dispatch = useAppDispatch();
	const inProgress: boolean = useAppSelector((state) => state.inProgress);
	const [categoryName, setCategoryName] = useState<string>("");

	const addCategoryHandler = () => {
		if (inProgress) return;
		dispatch(categoryActions.addCategory(id));
	};

	const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCategoryName(e.target.value);
	};

	return (
		<li>
			{!isCreated ? (
				<div className="category">
					<input
						autoFocus
						type="text"
						defaultValue={name}
						onChange={inputHandler}
					/>
					<CreationActions
						categoryId={id}
						categoryName={categoryName === "" ? name : categoryName}
						parentId={parentId}
					/>
				</div>
			) : (
				<div
					id={`${id === 1 ? name.toLowerCase() : ""}`}
					style={{ backgroundColor: parentId === 1 ? "#f9a37c" : "#17b3d9" }}
					className={`${id === 1 ? "parent category" : "category sub"}`}
				>
					{name}
					<CategoryActions
						addCategoryHandler={addCategoryHandler}
						categoryId={id}
						categoryName={categoryName}
						parentId={parentId}
					/>
				</div>
			)}

			{children.length > 0 ? (
				<ul>
					{(children ?? [].length > 0).map((node: CategoryNode) => (
						<Category key={Math.random()} {...node} />
					))}
				</ul>
			) : null}
		</li>
	);
};

export default Category;
