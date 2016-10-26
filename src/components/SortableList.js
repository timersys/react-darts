import React from 'react';
import Sortable from 'react-anything-sortable';
import SortableItem from '../containers/SortableItem';

const SortableList = React.createClass({
	renderItem(user, index) {
      return (
        <SortableItem key={user.ID} className="dynamic-item" sortData={user}>
          {user.name}
          <span className="delete"
            onClick={this.props.removePlayer.bind(null, index, user)}
          >&times;</span>
        </SortableItem>
      );
    },
    render() {
        return (
        	<Sortable onSort={this.props.orderPlayer} dynamic direction="horizontal">
            	{this.props.players ? this.props.players.map(this.renderItem) : ''}
          	</Sortable>
        )
    }
});

export default SortableList;