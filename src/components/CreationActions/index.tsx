import React from "react";
import classes from "./index.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import { useAppDispatch } from "../../hooks";
import { categoryActions } from "../../store/categorySlice";

type Props = {
	categoryId: number;
	categoryName: string;
	parentId: number;
};

const CreationActions: React.FC<Props> = ({
	categoryId,
	categoryName,
	parentId,
}) => {
	const dispatch = useAppDispatch();
	const submitCategoryHandler = () => {
		console.log(categoryName);
		if (categoryName === undefined) return;

		dispatch(
			categoryActions.submitCategory({
				categoryId: categoryId,
				categoryName: categoryName,
			})
		);
	};

	const cancelHandler = () => {
		dispatch(
			categoryActions.removeCategory({
				parentId: parentId,
				categoryId: categoryId,
			})
		);
	};

	return (
		<div className={classes.wrapper}>
			<div className={`${classes.icon} ${classes.cancel}`}>
				<ClearIcon onClick={cancelHandler} fontSize="inherit" />
			</div>
			<div className={`${classes.icon} ${classes.submit}`}>
				<CheckIcon onClick={submitCategoryHandler} fontSize="inherit" />
			</div>
		</div>
	);
};

export default CreationActions;
