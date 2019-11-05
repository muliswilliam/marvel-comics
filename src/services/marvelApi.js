import ApiService from './Api';

const API_KEY = 'f53fabc74b742dfeed139ad64d067888';
const API_ROOT = 'https://gateway.marvel.com';
const LIMIT = 20;

const client = new ApiService({ baseURL: API_ROOT, apiKey: API_KEY });

const marvelApi = {};

const getParams = (page = 0, limit = LIMIT) => ({ offset: page * limit, limit, orderBy: '-focDate' });

marvelApi.getComic = (comicId) => {
	return client.get(`/v1/public/comics/${comicId}`);
}

marvelApi.getComics = (page, limit) => {
	const params = getParams(page, limit);
	return client.get('/v1/public/comics', params);
};

export default marvelApi;
