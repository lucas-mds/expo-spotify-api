import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, Button } from 'react-native';

export default function({
  items,
  ItemComponent,
  onItemPress,
}) {
  const Items = items
    .map((item, index) => (
      <ItemComponent
        onPress={() => onItemPress(item)}
        key={item.id || index} {...item}
      />)
    );

  return (
    <ScrollView style={{ padding: 15 }}>
      {Items}
    </ScrollView>
  )
}