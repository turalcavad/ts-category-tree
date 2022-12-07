import "./App.css";
import { CategoryNode } from "./data";
import { useSelector } from "react-redux";
import Category from "./components/Category";

function App() {
	const data: CategoryNode = useSelector((state) => state as CategoryNode);
	console.log(data);
	return (
		<div className="container">
			<Category {...data} />
		</div>
		// <div className="container">
		// 	<div className="category-header">
		// 		Categories
		// 		<button>add</button>
		// 	</div>
		// 	<div className="category-header">
		// 		Categories
		// 		<button>add</button>
		// 	</div>
		// </div>
	);
}

export default App;
