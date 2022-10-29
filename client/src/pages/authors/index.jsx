import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header, Segment } from 'semantic-ui-react';

import Create from './Create';
import List from './List';
import Update from './Update';

const Authors = ({ match }) => {
	return (
		<>
			<Header as='h1' textAlign='center'>
				Authors
			</Header>
			<Segment>
				<Routes>
					<Route path={match.path} component={List} />
					<Route path={`${match.path}/crear`} component={Create} />
					<Route path={`${match.path}/:_id`} component={Update} />
				</Routes>
			</Segment>
		</>
	);
};

export default Authors;
