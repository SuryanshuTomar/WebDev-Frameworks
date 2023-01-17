import axios from "axios";

const authFetch = axios.create({
	baseURL: "https://course-api.com",
});

authFetch.interceptors.request.use(
	(request) => {
		request.headers.common["Accept"] = "application/json";
		console.log("Request Sent!!");
		return request;
	},
	(error) => {
		return Promise.reject(error);
	}
);
authFetch.interceptors.response.use(
	(response) => {
		console.log("Got the Response!!!");
		return response;
	},
	(error) => {
		console.log(error.response);
		if (error.response.status === 404) {
			// do something
			console.log("Page not Found");
		}
		return Promise.reject(error);
	}
);

export default authFetch;
