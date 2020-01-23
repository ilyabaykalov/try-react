import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavItem from '../NavItem/NavItem';
import './Nav.scss';

const propTypes = {
	navItems: PropTypes.array.isRequired,
};

class Nav extends Component {
	renderNavItems() {
		return this.props.navItems.map((item, index) => {
			return <NavItem title={item.title} key={index} />;
		});
	}

	render() {
		return <div className={'nav-items'}>{this.renderNavItems()}</div>;
	}
}

Nav.displayName = 'Nav';
Nav.propTypes = propTypes;

export default Nav;
