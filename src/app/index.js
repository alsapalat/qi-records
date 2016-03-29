import React from 'react';
import ReactDOM from 'react-dom';

import { Router,Route,IndexRoute,hashHistory } from 'react-router'

import Home from './pages/Home';
import ListView from './pages/ListView';

//PageContainers
import App from './containers/App';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component ={App}>
			<IndexRoute component = {Home}></IndexRoute>
			<Route path="list(/:item)" name="list" component={ListView}></Route>
		</Route>
	</Router>,
	document.getElementById('app')
)
