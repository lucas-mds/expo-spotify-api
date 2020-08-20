import React from 'react';
import { View, Text } from 'react-native';

import PlaylistListItem from '../../components/PlaylistListItem/layout';
import List from '../../components/List';

export default function ({ items }) {
  return (
    <View>
      <List
        items={items}
        ItemComponent={PlaylistListItem}
      />
    </View>
  )
}