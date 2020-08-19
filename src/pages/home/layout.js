import React from 'react';
import { Button } from 'react-native';

import PlaylistListItem from '../../components/PlaylistListItem/layout';
import List from '../../components/List';

export default function({ signOut, items, onItemPress }) {
  return (
    <>
      <List
        items={items}
        ItemComponent={PlaylistListItem}
        onItemPress={onItemPress}
      />
      <Button
        title="sair"
        onPress={signOut}
      />
    </>
  )
}