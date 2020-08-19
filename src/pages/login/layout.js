import React from 'react';
import { View, Button } from 'react-native';

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