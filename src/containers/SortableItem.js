import React from 'react';
import { SortableItemMixin } from 'react-anything-sortable';

const SortableItem =  React.createClass({
  mixins: [SortableItemMixin],

  getDefaultProps() {
    return {
      className: 'player-item'
    };
  },

  render() {
    const { className, children } = this.props;
    return this.renderWithSortable(
      <div className={className}>
        {children}
      </div>
    );
  }
});

export default SortableItem;