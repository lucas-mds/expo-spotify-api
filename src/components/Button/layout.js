import React from 'react';

import {
  ButtonContainer,
  ButtonText
} from './styles';


export default function({ color, text, onPress }) {
  return (
    <ButtonContainer
      onPress={onPress}
      color={color}
    >
      <ButtonText>
        {text}
      </ButtonText>
    </ButtonContainer>
  )
};