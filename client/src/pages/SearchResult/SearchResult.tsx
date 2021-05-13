import React from "react";
import Activities from "../../components/activities/Activities";

const SearchResult = () => {
	return (
		<div>
			<h1>
				<span className="primary-font">The search results is :</span>
			</h1>
			<Activities />
		</div>
	);
};

export default SearchResult;
