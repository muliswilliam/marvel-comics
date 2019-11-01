import { createSelector } from 'reselect';

export const comicsSelector = state => state.comic.comics;
export const totalSelector = state => state.comic.total;

export const hasMoreComics = createSelector(
  comicsSelector,
  totalSelector,
  (comics, total) => comics.length < total
);

export const selectComic = state => comicId => {
  return state.comic.comics.find(comic => comic.id === comicId);
};
