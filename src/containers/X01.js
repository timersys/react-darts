import React from 'react';
import PlayerPicker from '../components/PlayerPicker';
import X01Game from '../components/X01Game';

export const X01Picker = React.createClass({
	render() {
		return (
			<div>
				<input type="number" ref="X" className="x-cuanto" defaultValue="3"/>
				<PlayerPicker {...this.props} startPlaying={this.props.startPlaying.bind(null, this.refs.X)} />
			</div>
		);
	}
});

const X01 = React.createClass({
	getInitialState(){
		return { 
			playing : false,
			x : 3,
			score: {}
		}
	},
	startPlaying(X){
		this.setState({
			playing: true,
			x : X.value
		})
	},
	render() {
		return (
			<div>

				{this.state.playing && this.state.playing == true ? <X01Game {...this.props} xval={this.state.x} /> : <X01Picker {...this.props} startPlaying={this.startPlaying} />  }
			</div>
		);
	}
});

export default X01