import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './NavItem.scss';

const propTypes = {
	title: PropTypes.string.isRequired,
};

class NavItem extends Component {
	render() {
		return (
			<div className={'nav-item'}>
				<p className={'nav-item__title'}>{this.props.title}</p>
				<hr className={'nav-item__delimiter'} />
			</div>
		);
	}
}

NavItem.displayName = 'NavItem';
NavItem.propTypes = propTypes;

export default NavItem;
