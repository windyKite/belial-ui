import React from 'react';
import './index.scss';
import Icon from '../../../lib/components/icon/index';

const Header: React.FC = () => {
	return (
		<div className="example-header">
			<div className="example-header_logo">
				<img src="/doc/images/logo.png" className="example-header_logo-image" />
				<div className="example-header_logo-description">Belial-UI Of React</div>
			</div>
			<a style={{display: 'flex'}} href="https://github.com/windyKite/belial-ui" target="_blank">
				<Icon name="github"/>
			</a>
		</div>
	);
};

export default Header;