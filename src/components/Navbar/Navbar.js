import React, { Component } from 'react';

import Nav from './Nav/Nav';
import NavBrand from './NavBrand/NavBrand';

import './Navbar.scss';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navItems: [
				{ title: 'Услуги' },
				{ title: 'Проекты' },
				{ title: 'Команда' },
				{ title: 'Контакты' },
			],
			href: 'src/components/Navbar/NavBrand/logo.svg',
			brandTitle: 'TrueSib Coders',
		};
	}

	render() {
		return (
			<div className={'navbar'}>
				<NavBrand href={this.state.href} brandTitle={this.state.brandTitle} />
				<Nav navItems={this.state.navItems} />
			</div>
		);
	}
}

export default Navbar;
