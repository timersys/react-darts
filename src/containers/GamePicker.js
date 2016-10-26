import React from 'react';
import { Link } from 'react-router';

const GamePicker = React.createClass({
	render() {
		return (
			<div>
				<h1>A que queres jugar?</h1>
				<Link to="/X01">X01</Link>
				<Link to="/cricket">Cricket</Link>
			</div>
		);
	}
});

export default GamePicker;