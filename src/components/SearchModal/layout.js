import React from 'react';
import { Text, View, TextInput } from 'react-native';
import Modal from 'react-native-modal';

import Buttom from '../Button/layout';
import Switch from '../Switch/layout';

import {
  ModalContent,
  Title,
  SearchInput,
  FilterTitle,
  Actions,
} from './styles';

export default function({
  open,
  onBackdropPress,
  formConfig,
}) {
  return (
    <Modal isVisible={open} onBackdropPress={onBackdropPress}>
      <ModalContent>
        <Title>
          { formConfig.type === 'playlist' ? (
              'Busque pelo nome da playlist:') : (
              'Busque pelo nome da música ou artista')
          }
        </Title>

        <SearchInput
          onChangeText={text => formConfig.setValue('string', text)}
          value={formConfig.values.string}
        />

        {
          formConfig.type === 'playlist' ? (
            <>
              <FilterTitle>Aplique filtros para facilitar sua busca:</FilterTitle>

              <Switch
                name="public"
                value={formConfig.values.public}
                label="Playlist pública:"
                onValueChange={formConfig.setValue}
              />

              <Switch
                name="collaborative"
                value={formConfig.values.collaborative}
                label="Playlist colaborativa:"
                onValueChange={formConfig.setValue}
              />
            </>
          ) : null
        }

        <Actions>
          <Buttom width="30%" color="grey" text="LIMPAR" onPress={() => {
            formConfig.configFilter(null);
            formConfig.clearValues();
          }} />
          <Buttom width="30%" text="BUSCAR" onPress={() => formConfig.configFilter(formConfig.values)} />
        </Actions>
        
      </ModalContent>
    </Modal>
  );
}