import React from 'react';
import PlayerPicker from '../../components/PlayerPicker';

const x01Picker = React.createClass({
	render() {
		return (
			<div>
				<input type="number" ref="X" classname="x-cuanto" value="3"/>
				<PlayerPicker {...this.props} startPlaying={this.startPlaying} />
			</div>	
		);
	}
});
export default x01Picker;