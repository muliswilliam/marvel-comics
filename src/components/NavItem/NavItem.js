import React, {Component} from 'react';
import './NavItem.scss';

class NavItem extends Component {
	render({ name, route } = this.props) {
		return (
			<li className="nav-item__link-wrapper">
				<a className="nav-item__link" href={route}>
					{name}
				</a>
			</li>
		);
	}
}

export default NavItem;
