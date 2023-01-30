import React from "react";

function PreFetchedPost({ post }) {
	return (
		<div>
			PreFetchedPost :{" "}
			{<p style={{ maxWidth: "500px" }}>{JSON.stringify(post)}</p>}
		</div>
	);
}

export default PreFetchedPost;
