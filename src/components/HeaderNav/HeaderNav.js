import React, {Component} from 'react';

import './HeaderNav.scss';
import MenuTitle from './MenuTitle/MenuTitle';

class HeaderNav extends Component {
	render() {
		return (
			<div className={'titles'}>
				<MenuTitle text={'Услуги'} />
				<MenuTitle text={'Проекта'} />
				<MenuTitle text={'Команда'} />
			</div>
		);
	}
}

export default HeaderNav;
