import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/" className="navbar-brand">
					News Scrapper
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;
