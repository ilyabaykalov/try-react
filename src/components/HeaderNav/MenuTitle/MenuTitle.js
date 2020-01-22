import React from 'react';

import './MenuTitle.scss';

const MenuTitle = props => (
	<div className={'item'}>
		<p className={'title'}>{props.text}</p>
		<hr />
	</div>
);

export default MenuTitle;
