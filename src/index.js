import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { BrowserRouter, Route } from 'react-router-dom';

import reducers from './reducers';
import JobsIndex from './components/jobs_index';
import JobsNew from './components/jobs_new';
// import JobsShow from './components/jobs_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path='/jobs/new' component={JobsNew} />
					<Route path='/' component={JobsIndex} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>
	, document.querySelector('.container'));
