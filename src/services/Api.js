import axios from 'axios';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const TIMEOUT = 20000;
const HEADERS = {
	'Content-Type': 'application/json',
	Accept: 'application/json'
};

class ApiService {
	constructor({baseURL = BASE_URL, apiKey = '', timeout = TIMEOUT, headers = HEADERS, auth}) {
		const client = axios.create({
			baseURL,
			timeout,
			headers,
			auth
		});

		client.interceptors.response.use(this.handleSuccess, this.handleError);
		this.client = client;
		this.apiKey = apiKey;
	}

	handleSuccess(response) {
		return response;
	}

	handleError(error) {
		return error;
	}

	urlPath(path) {
		return `${path}?apikey=${this.apiKey}`
	}

	get(path, params) {
		const reqParams = {
			...params,
			apikey: this.apiKey
		};
		return this.client.get(path, { params: reqParams }).then(response => response.data);
	}

	post(path, payload) {
		return this.client.post(this.urlPath(path), payload).then(response => response.data);
	}

	put(path, payload) {
		return this.client.put(this.urlPath(path), payload).then(response => response.data);
	}

	patch(path, payload) {
		return this.client.patch(this.urlPath(path), payload).then(response => response.data);
	}

	delete(path) {
		return this.client.delete(this.urlPath(path)).then(response => response.data);
	}
}

export default ApiService;
