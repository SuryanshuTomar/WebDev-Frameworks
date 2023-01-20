import axios from "axios";

const RickMortyFetch = axios.create({
	baseURL: "https://rickandmortyapi.com/api",
});

export default RickMortyFetch;
