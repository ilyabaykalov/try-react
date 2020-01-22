import React, {Component} from 'react';
import PropTypes from 'prop-types';

import NavItem from '../NavItem/NavItem';
import './Nav.scss';

const propTypes = {
	items: PropTypes.array,
};

class Nav extends Component {
	render() {
		return (
			<div className={'items'}>
				{[this.props.items].map(item => {
					<NavItem title={item.title} />;
				})}
			</div>
		);
	}
}

Nav.displayName = 'Nav';
Nav.propTypes = propTypes;

Nav.Item = NavItem;

export default Nav;
