import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const propTypes = {
	title: PropTypes.string.isRequired,
};

class Button extends Component {
	render() {
		return <button className={'button'}>{this.props.title}</button>;
	}
}

Button.displayName = 'Button';
Button.propTypes = propTypes;

export default Button;
