import React from 'react';

import { View, Text, Image } from 'react-native'
import {
  Container,
  Content,
  PrimaryText,
  SecondaryText,
  TextContainer,
  DetailsText
} from './styles';

export default function({
  onPress,
  imageURL,
  primaryText,
  secondaryText,
  detailsText,
}) {
  return (
    <Container onPress={onPress}>
      <Image
        style={{
          width: 50,
          height: 50,
        }}
        source={{
          uri: imageURL,
        }}
      />
      <Content>
        <TextContainer>
          <PrimaryText>{primaryText}</PrimaryText>
          <SecondaryText>{secondaryText}</SecondaryText>
        </TextContainer>
        <DetailsText>
          {detailsText}
        </DetailsText>
      </Content>
    </Container>
  )
}