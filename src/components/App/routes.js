import { Redirect, Route, Switch } from 'react-router';
import Comics from '../Comics/Comics';
import Characters from '../Characters/Characters';
import Games from '../Games/Games';
import React from 'react';
import ComicWrapper from '../ComicWrapper/ComicWrapper';

export const Routes = props => (
  <Switch>
    <Route path="/characters">
      <Characters />
    </Route>
    <Route path="/games">
      <Games />
    </Route>
    <Route exact path="/comics">
      <Redirect to="/" />
    </Route>
    <Route
      path="/comics/:comicId"
      render={routerProps => (
        <ComicWrapper
		  {...routerProps}
		  getComic={props.getComic}
          isFetching={props.comic.isFetching}
          comics={props.comic.comics}
        />
      )}
    ></Route>
    <Route path="/">
      <Comics {...props} />
    </Route>
  </Switch>
);
