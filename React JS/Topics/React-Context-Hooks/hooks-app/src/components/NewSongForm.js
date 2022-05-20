import React, { useState } from "react";

function NewSongForm(props) {
	const [songName, setSongName] = useState("");
	const songNameHandler = (event) => {
		setSongName(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		if (songName) {
			props.setNewSong(songName);
			setSongName("");
		} else {
			alert("Song Name can not be Empty");
		}
	};

	return (
		<form
			onSubmit={submitHandler}
			style={{ textAlign: "center", marginTop: "50px" }}
		>
			<label htmlFor="songName">Enter New Song : </label>
			<input
				type="text"
				id="songName"
				placeholder="i.e. Not Afraid"
				value={songName}
				onChange={songNameHandler}
				required
			/>
			<input type="submit" value="Add Song" />
		</form>
	);
}

export default NewSongForm;
