import React, { Component } from 'react';

import Nav from '../components/Navbar/Nav/Nav';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navItems: [
				{ title: 'Услуги' },
				{ title: 'Проекты' },
				{ title: 'Команда' },
				{ title: 'Контакты' },
			],
		};
	}

	render() {
		return <Nav navItems={this.state.navItems} />;
	}
}

export default Header;
