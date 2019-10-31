import marvelApi from '../../services/marvelApi';

const NS = '@marvel/comic';

export const actionTypes = {
	FETCH_COMICS_REQUEST: `${NS}/FETCH_COMICS_REQUEST`,
	FETCH_COMICS_SUCCESS: `${NS}/FETCH_COMICS_SUCCESS`,
	FETCH_COMICS_FAILURE: `${NS}/FETCH_COMICS_FAILURE`,
};

// composing an action
const action = (type, payload) => ({type, payload});

const actions = {
	/**
	 * GEt comics from API
	 * @param payload Object with page and limit keys
	 * @return action dispatched
	 */
	getComics: (payload = { page: 0, limit: 20}) => {
		return dispatch => {
			dispatch(action(actionTypes.FETCH_COMICS_REQUEST, payload));
			const {page, limit} = payload;
			return marvelApi.getComics(page, limit)
				.then(response => {
					return dispatch(action(actionTypes.FETCH_COMICS_SUCCESS, { data: response.data }))
				})
				.catch((error) => dispatch(action(actionTypes.FETCH_COMICS_FAILURE, { error })))
		}
	}
};

export default actions;
