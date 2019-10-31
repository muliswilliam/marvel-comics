import { createSelector} from 'reselect';

export const comicsSelector = state => state.comic.comics;
export const totalSelector = state => state.comic.total;

export const hasMoreComics = createSelector(
	comicsSelector,
	totalSelector,
	(comics, total) => {
		console.log({ comics, total });
		return comics.length < total
	}
);
