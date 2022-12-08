import React from "react";
import classes from "./index.module.css";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

interface FuncProp {
	addCategoryHandler: () => void;
}
const CategoryActions: React.FC<FuncProp> = ({ addCategoryHandler }) => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.icon}>
				<AddIcon onClick={addCategoryHandler} fontSize="inherit" />
			</div>
			<div className={classes.icon}>
				<EditIcon fontSize="inherit" />
			</div>
			<div className={classes.icon} style={{ backgroundColor: "#ff8194" }}>
				<CheckIcon fontSize="inherit" />
			</div>
		</div>
	);
};

export default CategoryActions;
