import React from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
	const { userId } = useParams();
	return (
		<div>
			<h4>Details for user id : {userId} </h4>
		</div>
	);
}

export default UserDetails;
