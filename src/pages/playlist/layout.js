import React from 'react';
import { View, Text } from 'react-native';

import PlaylistListItem from '../../components/PlaylistListItem/layout';
import List from '../../components/List';
import Modal from '../../components/SearchModal/';

export default function ({ items, searchConfig }) {
  return (
    <View>
      <Modal {...searchConfig} />
      <List
        items={items}
        ItemComponent={PlaylistListItem}
      />
    </View>
  )
}