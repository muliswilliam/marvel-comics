import React, {Component} from 'react';

import './Nav.scss';
import NavItem from '../NavItem/NavItem';

class Nav extends Component {
	menuItems = [
		{
			id: 1,
			name: 'Comics',
			route: '/'
		},
		{
			id: 2,
			name: 'Characters',
			route: '/characters'
		},
		{
			id: 3,
			name: 'Games',
			route: '/games'
		}
	];

	constructor(props) {
		super(props);
		this.state = {
			menuItems: this.menuItems
		};
	}

	renderMenuItems = () => {
		return this.state.menuItems.map(
			item => <NavItem key={item.id} {...item} />
		)
	};

	render() {
		return (
			<div>
				<nav className="nav">
					<a href="/">
						<img
							className="nav__logo"
							src="/images/marvel.svg"
							alt="Marvel logo"
						/>
					</a>
				</nav>
				<div className="nav__lower-wrapper">
					<ul className="nav__lower">
						{ this.renderMenuItems() }
					</ul>
				</div>
			</div>
		);
	}
}

export default Nav;
