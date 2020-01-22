import React from 'react';

import './HeaderNav.scss';
import MenuTitle from './MenuTitle/MenuTitle';

const HeaderNav = () => (
	<div className={'titles'}>
		<MenuTitle text={'Услуги'} />
		<MenuTitle text={'Проекты'} />
		<MenuTitle text={'Команда'} />
	</div>
);

export default HeaderNav;
