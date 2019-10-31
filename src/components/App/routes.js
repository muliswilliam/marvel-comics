import {Route, Switch} from 'react-router';
import Comics from '../Comics/Comics';
import Characters from '../Characters/Characters';
import Games from '../Games/Games';
import React from 'react';

export const Routes = (props) => (
	<Switch>
		<Route path="/characters">
			<Characters />
		</Route>
		<Route path="/games">
			<Games />
		</Route>
		<Route path="/">
			<Comics {...props} />
		</Route>
	</Switch>
);
