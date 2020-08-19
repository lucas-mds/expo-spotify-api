import React from 'react';
import { View, Text, Button } from 'react-native';

export default function({ signOut, fetchPlaylists }) {
  return (
    <View style={{ justifyContent: 'center', flex: 1 }}>
      <Text>
        Welcome!
      </Text>
      <Button
        title="sair"
        onPress={signOut}
      />
      <Button
        title="fetch"
        onPress={fetchPlaylists}
      />
    </View>
  )
}