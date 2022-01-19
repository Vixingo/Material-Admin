// create axios client here, see the variables in .env
// kartauth header = see values in env
import axios from "axios";

const base = process.env.REACT_APP_BASE;
const x_api_key = process.env.REACT_X_API_KEY;
const x_api_secret = process.env.REACT_X_API_SECRET;

export function _post  (url,data) {
	const headers = { 
        'x-api-key': x_api_key,
        'x-api-secret': x_api_secret
    };

	axios.post(base+""+url,data,{headers})
	.then(function (response) {
		return response.data;
		})
		.catch(function (error) {
		console.log(error);
		});

}


export function _get  (url,data) {
	const headers = { 
        'x-api-key': x_api_key,
        'x-api-secret': x_api_secret
    };

	axios.get(base+""+url,{headers})
	.then(function (response) {
		return response.data;
		})
		.catch(function (error) {
		console.log(error);
		});

}


