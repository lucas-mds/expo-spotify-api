import React from 'react';
import { Text, View, TextInput, Switch } from 'react-native';
import Modal from 'react-native-modal';

import Buttom from '../Button/layout';

export default function({
  open,
  formConfig,
}) {
  return (
    <Modal isVisible={open}>
      <View style={{ backgroundColor: 'white', padding: 20 }}>
        <Text>Busque pelo nome da playlist:</Text>

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1, }}
          onChangeText={text => formConfig.setValue('string', text)}
          value={formConfig.values.string}
        />

        <Text style={{ marginTop: 20, marginBottom: 10 }}>Aplique filtros para facilitar sua busca:</Text>

        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Text>Playlist pública:</Text>

          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={formConfig.values.public ? "#5D4CC3" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={value => formConfig.setValue('public', value)}
            value={formConfig.values.public}
          />
        </View>

        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Text>Playlist colaborativa:</Text>

          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={formConfig.values.collaborative ? "#5D4CC3" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={value => formConfig.setValue('collaborative', value)}
            value={formConfig.values.collaborative}
          />
        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'center'  }}>
          <Buttom width="30%" color="grey" text="LIMPAR" onPress={() => formConfig.configFilter(null)} />
          <Buttom width="30%" text="BUSCAR" onPress={() => formConfig.configFilter(formConfig.values)} />
        </View>
        
      </View>
    </Modal>
  );
}