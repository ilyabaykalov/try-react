import React, {Component} from 'react';

import './App.scss';
import test from './test.jpg';

class App extends Component {
	render() {
		return (
			<div>
				<h1>My React App!</h1>
				<img src={test} alt={'test'} width={'100px'} />
			</div>
		);
	}
}

export default App;
