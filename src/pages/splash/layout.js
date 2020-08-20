import React from 'react';
import { View, Text, Image } from 'react-native';

import { 
  Container,
  ImageContainer,
  Logo,
  Footer,
} from './styles';


export default function() {
  return(
    <Container>
      <ImageContainer>
        <Logo source={require('../../imgs/baseline_graphic_eq_white_48dp.png')} />
      </ImageContainer>
      <Footer>made by lucasmds</Footer>
    </Container>
  )
};