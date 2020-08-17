import React from 'react';
import { View, Text, Image } from 'react-native';

export default function() {
  return(
    <View style={{ justifyContent: 'center', flex: 1 }}>
      <Image
        style={{
          width: 50,
          height: 50,
          alignSelf: 'center'
        }}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text style={{ alignSelf: 'center' }}>made by lucasmds</Text>
    </View>
  )
};