import { useState } from "react";
import classes from "./index.module.css";
import NearMeIcon from "@mui/icons-material/NearMe";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

interface Props {
	setRecenter: any;
	setZoomValue: any;
	zoomValue: number;
}

const Header: React.FC<Props> = ({ setRecenter, setZoomValue, zoomValue }) => {
	const [open, setOpen] = useState<boolean>(false);
	const arr: number[] = [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130];
	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<header className={classes.header}>
			<div>
				<h1>Services</h1>
			</div>

			<div className={classes.right}>
				<ul>
					<li className={classes.list}>List View</li>
					<li
						className={classes.list}
						onClick={() => {
							setRecenter(true);
						}}
					>
						<NearMeIcon fontSize="inherit" />
					</li>
					<li>
						<ul className={classes.zoom}>
							<li>
								<div
									onClick={() => {
										if (zoomValue === 30) return;
										setZoomValue(zoomValue - 10);
									}}
								>
									<RemoveIcon fontSize="inherit" />
								</div>
							</li>
							<li className={classes.dropdown} onClick={handleOpen}>
								{zoomValue + "%"}
								{open ? (
									<ul className={classes.menu}>
										{arr.map((n: number) => (
											<li
												key={n}
												className={classes.menuItem}
												style={{
													backgroundColor: n === zoomValue ? "#c8d0da" : "",
												}}
												onClick={() => {
													setZoomValue(n);
												}}
											>
												{n + "%"}
											</li>
										))}
									</ul>
								) : null}
							</li>
							<li>
								<div
									onClick={() => {
										if (zoomValue === 130) return;
										setZoomValue(zoomValue + 10);
									}}
								>
									<AddIcon fontSize="inherit" />
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
