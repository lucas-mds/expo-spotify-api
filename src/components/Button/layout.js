import React from 'react';

import {
  ButtonContainer,
  ButtonText
} from './styles';


export default function({ color, text, onPress, width }) {
  return (
    <ButtonContainer
      width={width}
      onPress={onPress}
      color={color || '#5D4CC3'}
    >
      <ButtonText>
        {text}
      </ButtonText>
    </ButtonContainer>
  )
};