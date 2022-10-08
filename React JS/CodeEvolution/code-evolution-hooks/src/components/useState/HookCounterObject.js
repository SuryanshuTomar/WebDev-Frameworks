import React, { useState } from "react";

function HookCounterObject() {
	const [name, setName] = useState({ firstName: "", lastName: "" });
	return (
		<div>
			<h1>HookCounterObject</h1>{" "}
			<form action="">
				<input
					type="text"
					value={name.firstName}
					onChange={(e) =>
						setName((prevState) => ({
							...prevState,
							firstName: e.target.value,
						}))
					}
				/>
				<input
					type="text"
					value={name.lastName}
					onChange={(e) =>
						setName((prevState) => ({
							...prevState,
							lastName: e.target.value,
						}))
					}
				/>
			</form>
			<div>
				<h3>FirstName : {name.firstName}</h3>
				<h3>LastName : {name.lastName}</h3>
			</div>
		</div>
	);
}

export default HookCounterObject;
