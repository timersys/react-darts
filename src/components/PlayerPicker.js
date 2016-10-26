import React from 'react';
import Autocomplete from './Autocomplete';
import SortableList from './SortableList';
import css from '../styles/playerpicker.styl';

const PlayerPicker = React.createClass({
	getInitialState() {
		return {
			playing : ''
		}
	},
	matchPlayerToTerm(player, value) {
	  return player.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ;
	},
	render() {
			let styles = {
			  item: {
			    padding: '2px 6px',
			    cursor: 'default'
			  },

			  highlightedItem: {
			    color: 'white',
			    background: 'hsl(200, 50%, 50%)',
			    padding: '2px 6px',
			    cursor: 'default'
			  },

			  menu: {
			    border: 'solid 1px #ccc'
			  },
			  wrapperStyle: {
			  	zIndex: 999999,
			  	position: 'relative'
			  }
			};
		return (
			<div>
				<h2>Quien juega?</h2>
				<Autocomplete
				value = {this.state.value }
				items = { this.props.users }
				getItemValue={ (item) => item.name }
				shouldItemRender={this.matchPlayerToTerm}
				renderItem={(item, isHighlighted) => (
					<div
					style={isHighlighted ? styles.highlightedItem : styles.item}
					key={item.ID}
					id={item.ID}
					>{item.name}</div>
				)}
				onSelect={this.props.addPlayer}
				onChange={(event, value) => this.setState({ value })}
				wrapperStyle ={ styles.wrapperStyle }
				/>
				<SortableList {...this.props}/> <button onClick={this.props.startPlaying}>Jugar!</button>
			</div>
		);
	}
});

export default PlayerPicker
