import React, {Component} from 'react';

import './MenuTitle.scss';

class MenuTitle extends Component {
	render() {
		return (
			<div>
				<p className={'title'}>{this.props.text}</p>
			</div>
		);
	}
}

export default MenuTitle;
