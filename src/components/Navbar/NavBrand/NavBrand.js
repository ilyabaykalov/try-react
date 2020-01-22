import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	href: PropTypes.string,
};

const NavBrand = React.forwardRef(
	({bsPrefix, className, as, ...props}, ref) => {
		// bsPrefix = useBootstrapPrefix(bsPrefix, 'navbar-brand');

		const Component = as || (props.href ? 'a' : 'span');

		return (
			<Component
				{...props}
				ref={ref}
				className={classNames(className, bsPrefix)}
			/>
		);
	}
);

NavBrand.displayName = 'NavBrand';
NavBrand.propTypes = propTypes;

export default NavBrand;
