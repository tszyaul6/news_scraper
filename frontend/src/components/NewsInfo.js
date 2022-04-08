import { Link } from "react-router-dom";

function NewsInfo(props) {
	const { _id, title, source, before } = props?.newsInfo;

	return (
		<div className="card mb-3">
			<div className="card-header">
				From: {source}, {before}
			</div>
			<div className="card-body">
				<div className="card-title">{title}</div>
				<Link to={_id} className="btn btn-primary">
					View Details
				</Link>
			</div>
		</div>
	);
}

export default NewsInfo;
