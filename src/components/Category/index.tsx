import React from "react";
import { CategoryNode } from "../../data";
import { useDispatch } from "react-redux";
import { categoryActions } from "../../store/categorySlice";
import classes from "./index.module.css";
import SubCategory from "../SubCategory";

const Category: React.FC<CategoryNode> = ({ id, children }: CategoryNode) => {
	const dispatch = useDispatch();

	const addCategoryHandler = () => {
		dispatch(categoryActions.addCategory(id));
	};

	return (
		<ul className={classes.tree}>
			<li>
				<span>{id + "category"}</span>

				<ul>
					{(children ?? []).map((node: CategoryNode) => (
						<SubCategory
							key={Math.random()}
							addCategoryHandler={addCategoryHandler}
							{...node}
						/>
					))}
				</ul>
			</li>
		</ul>
	);
};

export default Category;
