import React from "react";
import classes from "./index.module.css";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { categoryActions } from "../../store/categorySlice";

type Props = {
	categoryId: number;
	categoryName: string;
	parentId: number;
	addCategoryHandler: () => void;
};
const CategoryActions: React.FC<Props> = ({
	addCategoryHandler,
	categoryId,
	categoryName,
	parentId,
}) => {
	const dispatch = useAppDispatch();
	const inProgress = useAppSelector((state) => state.inProgress);

	const editHandler = () => {
		if (inProgress) return;
		dispatch(
			categoryActions.editCategory({
				categoryId: categoryId,
				newName: categoryName,
				parentId: parentId,
			})
		);
	};

	const deleteHandler = () => {
		dispatch(
			categoryActions.removeCategory({
				categoryId: categoryId,
				parentId: parentId,
			})
		);
	};

	return (
		<div className={classes.wrapper}>
			<div className={classes.icon}>
				<AddIcon onClick={addCategoryHandler} fontSize="inherit" />
			</div>

			{parentId === 0 ? null : (
				<>
					<div className={classes.icon}>
						<EditIcon onClick={editHandler} fontSize="inherit" />
					</div>

					<div className={classes.icon} style={{ backgroundColor: "#ff8194" }}>
						<ClearIcon onClick={deleteHandler} fontSize="inherit" />
					</div>
				</>
			)}
		</div>
	);
};

export default CategoryActions;
