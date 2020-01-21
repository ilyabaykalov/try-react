import React, {Component} from 'react';

import './MenuTitle.scss';

class MenuTitle extends Component {
	render() {
		return (
			<div className={'menu-title'}>
				<p className={'title'}>{this.props.text}</p>
				<hr />
			</div>
		);
	}
}

export default MenuTitle;
