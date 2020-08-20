import React from 'react';

import PlaylistListItem from '../../components/PlaylistListItem/layout';
import List from '../../components/List';
import Modal from '../../components/Modal/';

export default function({ items, onItemPress, searchConfig }) {
  return (
    <>
      <Modal {...searchConfig} />
      <List
        items={items}
        ItemComponent={PlaylistListItem}
        onItemPress={onItemPress}
      />
    </>
  )
}