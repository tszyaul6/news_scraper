import { useEffect, useState } from "react";
import NewsInfo from "../components/NewsInfo";

function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const [newsArray, setNewsArray] = useState([]);

	useEffect(() => {
		const fetchNewsInfo = async () => {
			let api = `${process.env.REACT_APP_BACKEND_API}/refresh`;
			let response = await fetch(api);
			let { allNewsInfo } = await response.json();
			setNewsArray(allNewsInfo);
			setIsLoading(false);
		};

		fetchNewsInfo();
	}, []);

	return (
		<div className="container">
			{isLoading && (
				<div className="alert alert-warning">
					Updating news, please wait...
				</div>
			)}

			{newsArray.map((newsInfo) => (
				<NewsInfo newsInfo={newsInfo} key={newsInfo._id} />
			))}
		</div>
	);
}

export default Home;
