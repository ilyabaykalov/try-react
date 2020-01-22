import React from 'react';

import './HeaderNav.scss';
import MenuTitle from './MenuTitle/MenuTitle';

const HeaderNav = () => (
	<div>
		<div className={'brand'}></div>
		<div className={'items'}>
			<MenuTitle text={'Услуги'} />
			<MenuTitle text={'Проекты'} />
			<MenuTitle text={'Команда'} />
		</div>
	</div>
);

export default HeaderNav;
