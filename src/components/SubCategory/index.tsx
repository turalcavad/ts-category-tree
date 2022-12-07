import { CategoryNode } from "../../data";

interface FuncProp {
	addCategoryHandler: Function;
}

type Props = FuncProp & CategoryNode;

const SubCategory: React.FC<Props> = ({ id, children, addCategoryHandler }) => {
	return (
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
	);
};

export default SubCategory;
