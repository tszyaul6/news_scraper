import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Article() {
	const location = useLocation();
	const [isLoading, setIsLoading] = useState(true);
	const [article, setArticle] = useState("");

	useEffect(() => {
		const fetchArticle = async () => {
			let api = `${process.env.REACT_APP_BACKEND_API}${location.pathname}`;
			let response = await fetch(api);
			let { content } = await response.json();
			setArticle(content);
			setIsLoading(false);
		};

		fetchArticle();
	}, [location.pathname]);

	return (
		<div className="container">
			{isLoading && (
				<div className="alert alert-warning">
					Fetching article, please wait...
				</div>
			)}
			<p>{article}</p>
		</div>
	);
}

export default Article;
