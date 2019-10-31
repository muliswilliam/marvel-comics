import actions, {actionTypes} from './actions';

const getInitialState = () => ({
	comics: [],
	limit: 30,
	page: 0,
	total: 0,
	isFetching: false,
	fetched: false,
	error: null
});

const comicReducer = (state = getInitialState(), { type, payload}) => {
	switch (type) {
		case actionTypes.FETCH_COMICS_REQUEST: {
			return {
				...state,
				isFetching: true,
				fetched: false
			}
		}

		case actionTypes.FETCH_COMICS_SUCCESS: {
			return {
				...state,
				isFetching: false,
				fetched: true,
				comics: [...state.comics, ...payload.data.results],
				page: state.page + 1,
				total: payload.data.total
			}
		}

		case actionTypes.FETCH_COMICS_FAILURE: {
			return {
				...state,
				isFetching: false,
				fetched: false,
				error: payload.error
			}
		}

		default:
			return state;
	}
};

export default comicReducer;
