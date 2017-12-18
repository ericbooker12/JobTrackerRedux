import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import JobsIndex from './components/jobs_index';
import JobsNew from './components/jobs_new';
import JobShow from './components/job_show';
import JobDetail from './components/job_detail';
// import MainPage from './components/main_page';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path='/jobs/new' component={JobsNew} />
					<Route path='/' component={JobsIndex} />
					<Route path='/jobs/:id' component={JobShow} />
				</Switch>

			</div>
		</BrowserRouter>
	</Provider>
	, document.querySelector('.main'));
