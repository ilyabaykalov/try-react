import React, { Component } from 'react';

import Navbar from './Navbar/Navbar';
import Button from '../components/Button/Button';

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Button title={'Начать с нами'} />
			</div>
		);
	}
}

App.displayName = 'App';

export default App;
