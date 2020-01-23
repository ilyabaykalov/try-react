import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './NavBrand.scss';

const propTypes = {
	href: PropTypes.string.isRequired,
	brandTitle: PropTypes.string.isRequired,
};

class NavBrand extends Component {
	render() {
		return (
			<div className={'brand'}>
				<img
					className={'brand__logo'}
					src={this.props.href}
					alt={this.props.brandTitle}
				/>
				<span className={'brand__title'}>{this.props.brandTitle}</span>
			</div>
		);
	}
}

NavBrand.displayName = 'Brand';
NavBrand.propTypes = propTypes;

export default NavBrand;
