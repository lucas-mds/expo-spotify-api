import React from 'react';
import Button from '../../components/Button/layout';
import {
  Container,
  LoginImage,
  HelperText,
} from './styles';


export default function({ signIn }) {
  return (
    <Container>
      <LoginImage
        resizeMode="contain"
        source={require('../../imgs/undraw_happy_music_g6wc.png')}
      />
      <Button
        text="LOGIN"
        color="#5D4CC3"
        onPress={signIn}
      />
      <HelperText>
        Faça o login no Spotify para continuar
      </HelperText>
    </Container>
  )
}