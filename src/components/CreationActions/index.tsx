import React from "react";
import classes from "./index.module.css";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import { useAppDispatch } from "../../hooks";
import { categoryActions } from "../../store/categorySlice";

type Props = {
	categoryId: number;
};

const CreationActions: React.FC<Props> = ({ categoryId }) => {
	const dispatch = useAppDispatch();
	const submitCategoryHandler = () => {
		dispatch(categoryActions.submitCategory(categoryId));
	};

	return (
		<div className={classes.wrapper}>
			<div className={`${classes.icon} ${classes.cancel}`}>
				<ClearIcon fontSize="inherit" />
			</div>
			<div className={`${classes.icon} ${classes.submit}`}>
				<CheckIcon onClick={submitCategoryHandler} fontSize="inherit" />
			</div>
		</div>
	);
};

export default CreationActions;
