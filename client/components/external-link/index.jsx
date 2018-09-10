/** @format */

/**
 * External dependencies
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { assign, omit } from 'lodash';
import GridiconExternal from 'gridicons/dist/external';

class ExternalLink extends Component {
	static defaultProps = {
		iconSize: 18,
		showIconFirst: false,
	};

	static propTypes = {
		className: PropTypes.string,
		href: PropTypes.string,
		onClick: PropTypes.func,
		icon: PropTypes.bool,
		iconSize: PropTypes.number,
		target: PropTypes.string,
		showIconFirst: PropTypes.bool,
		iconClassName: PropTypes.string,
	};

	render() {
		const classes = classnames(
			'external-link',
			this.props.className,
			{
				'icon-first': !! this.props.showIconFirst,
			},
			{
				'has-icon': !! this.props.icon,
			}
		);
		const props = assign(
			{},
			omit( this.props, 'icon', 'iconSize', 'showIconFirst', 'iconClassName' ),
			{
				className: classes,
				rel: 'external',
			}
		);

		if ( props.target ) {
			props.rel = props.rel.concat( ' noopener noreferrer' );
		}

		const iconComponent = (
			<GridiconExternal className={ this.props.iconClassName } size={ this.props.iconSize } />
		);

		return (
			<a { ...props }>
				{ this.props.icon && this.props.showIconFirst && iconComponent }
				{ this.props.children }
				{ this.props.icon && ! this.props.showIconFirst && iconComponent }
			</a>
		);
	}
}

export default ExternalLink;
