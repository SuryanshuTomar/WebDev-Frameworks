import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import NewSongForm from "./NewSongForm";

function SongsList() {
	const [songs, setSongs] = useState([
		{ title: "Almost Home", id: 1 },
		{ title: "Memory Gospel", id: 2 },
		{ title: "This Wild Darkness", id: 3 },
	]);

	const setNewSongHandler = (newSong) => {
		console.log("New Song : ", newSong);
		setSongs([...songs, { title: newSong, id: uuid() }]);
	};

	return (
		<div className="song-list">
			<NewSongForm setNewSong={setNewSongHandler} />
			<h3>Songs List :</h3>
			<ul>
				{songs.map((song) => (
					<li key={song.id}>{song.title}</li>
				))}
			</ul>
		</div>
	);
}

export default SongsList;

