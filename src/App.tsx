import "./App.css";
import { CategoryNode } from "./data";
import Category from "./components/Category";
import classes from "./components/Category/index";
import { useAppSelector } from "./hooks";

function App() {
	const data: CategoryNode = useAppSelector((state) => state.categories);
	console.log(data);
	return (
		<div className="container">
			<ul className="tree">
				<Category {...data} />
			</ul>
		</div>
	);
}

export default App;
