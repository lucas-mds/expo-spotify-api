import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest, ResponseType } from 'expo-auth-session';
import spotify_api from '../../config/spotify_api';
import { clientId } from '../../../credentials'
import UI from './styles';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};


export default function() {
  const [token, setToken] = React.useState('');
  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId,
      scopes: ['user-read-email', 'playlist-modify-public'],
      usePKCE: false,
      redirectUri: makeRedirectUri({
        useProxy: false,
      }),
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { access_token } = response.params;
      setToken(access_token)
      }
  }, [response]);

  console.log('meu token ', token)

  return(
    <UI signIn={() => promptAsync()} />
  )
};
