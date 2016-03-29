import React, { Component } from 'react';

class ListView extends Component {

	render() {
		const { params } = this.props;
		const { item } = params;

		return (
			<div className="container animated fadeIn">
				<div className="well">
					<h1>List {(item==null) ? "All" : "("+item+")"}</h1>
				</div>
			</div>
		);
	}
}

export default ListView;
