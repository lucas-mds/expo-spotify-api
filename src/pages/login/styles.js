import React from 'react';
import { View, Text, Image, Button } from 'react-native';

export default function({ signIn }) {
  return (
    <View style={{ justifyContent: 'center', flex: 1 }}>
      <Button
        title="Login"
        onPress={signIn}
      />
    </View>
  )
}