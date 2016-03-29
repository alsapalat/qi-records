import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {

	toggleCollapse = () => {
		console.log("toggle Collapse");
	}

	render() {
		return (
			<div className="navbar navbar-inverse navbar-static-top">
				<div className="container">				
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" onClick={this.toggleCollapse.bind(this)}>
							<span className="sr-only">Toggle Navitagion</span>
							<span className="icon-bar" />
							<span className="icon-bar" />
							<span className="icon-bar" />
						</button>


						<Link to="/" className="navbar-brand">qi<strong><span className="qi-highlight">|</span>Records</strong></Link>
					</div>

					<div className="collapse navbar-collapse">
						<ul className="nav navbar-nav">
							<li className="nav-item">
								<Link to="list" activeClassName="active">List View</Link>
							{/*<Link to="list" activeClassName="active animated bounceIn">List View</Link>*/}
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
