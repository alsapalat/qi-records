import React, { Component } from 'react';

import Header from '../components/Header';

class App extends Component {

	render() {
		const { location } = this.props;
		console.log(location);
		
		return (
			<div>
				<Header location = {location} />
				<div className="container">
				{ this.props.children }
				</div>
			</div>
		);
	}
}

export default App;
