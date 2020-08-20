import React from 'react';

import PlaylistListItem from '../../components/PlaylistListItem/layout';
import List from '../../components/List';

export default function({ items, onItemPress }) {
  return (
    <>
      <List
        items={items}
        ItemComponent={PlaylistListItem}
        onItemPress={onItemPress}
      />
    </>
  )
}