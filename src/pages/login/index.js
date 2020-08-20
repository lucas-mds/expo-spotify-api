import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest, ResponseType } from 'expo-auth-session';
import { clientId } from '../../../credentials';
import UI from './layout';
import { setItem } from '../../utils/storage';
import { useGlobalContext } from '../../config/global-context';
// import prevent_going_back from '../../utils/prevent_going_back';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};


export default function({ navigation }) {
  const { newState } = useGlobalContext();
  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId,
      scopes: ['user-read-email', 'playlist-modify-public', 'playlist-read-collaborative', 'playlist-read-private'],
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

      if (access_token) {
        newState({token: access_token})
        setItem('token', access_token)
        navigation.navigate('Home');
      }
    }
  }, [response]);


  return(
    <UI signIn={() => promptAsync()} />
  )
};
