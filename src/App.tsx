import "./App.css";
import { CategoryNode } from "./models/category";
import Category from "./components/Category";
import { useAppSelector } from "./hooks";
import Header from "./components/Header";
import { useEffect, useRef, useState } from "react";

function App() {
	const data: CategoryNode = useAppSelector((state) => state.categories);
	const containerRef = useRef<HTMLDivElement>(null);
	const [recenter, setRecenter] = useState(true);
	const [zoomValue, setZoomValue] = useState(100);

	useEffect(() => {
		setRecenter(false);
	}, [recenter]);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const onDrag = (event: any) => {
			event.preventDefault();
			const getStyle = window.getComputedStyle(container);
			const top = parseInt(getStyle.top);
			const left = parseInt(getStyle.left);

			container.style.left = `${left + event.movementX}px`;
			container.style.top = `${top + event.movementY}px`;
		};

		container.addEventListener("mousedown", () => {
			container.addEventListener("mousemove", onDrag);
		});

		document.addEventListener("mouseup", () => {
			container.removeEventListener("mousemove", onDrag);
		});

		return function cleanUpListener() {
			document.addEventListener("mouseup", () => {
				container.removeEventListener("mousemove", onDrag);
			});
			document.removeEventListener("mouseup", () => {
				container.removeEventListener("mousemove", onDrag);
			});
		};
	}, []);

	return (
		<>
			<Header
				setRecenter={setRecenter}
				setZoomValue={setZoomValue}
				zoomValue={zoomValue}
			/>

			<div className="wrapper">
				<div
					draggable
					ref={containerRef}
					className={`${"container"}`}
					style={{
						left: recenter ? "150px" : "",
						top: recenter ? "750px" : "",
						transform: `translate(-50%, -50%)`,
					}}
				>
					<ul className="tree" style={{ transform: `scale(${zoomValue}%)` }}>
						<Category {...data} />
					</ul>
				</div>
			</div>
		</>
	);
}

export default App;
