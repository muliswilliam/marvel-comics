import React from 'react';
import { useParams } from 'react-router';

import Comic from '../Comic/Comic';

function ComicWrapper(props) {
  const { comicId } = useParams();
  const { selectComic } = props;

  function getComic() {
    const comic = selectComic(parseInt(comicId));
    console.log(comic);

    if (comic) {
      return comic;
    } else {
      // load comic from the api
    }
  }

  return <Comic comic={getComic()} selectComic={selectComic}></Comic>;
}

export default ComicWrapper;
