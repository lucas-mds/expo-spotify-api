import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest, ResponseType } from 'expo-auth-session';
import { Button, SafeAreaView, StatusBar  } from 'react-native';

import spotify_api from './src/config/spotify_api';

import { clientId } from './credentials'

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export default function App() {
  const [token, setToken] = React.useState('');
  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId,
      scopes: ['user-read-email', 'playlist-modify-public'],
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      // For usage in managed apps using the proxy
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

  const fetchProfile = () => {
    spotify_api.get('/v1/me', { headers: { Authorization: `Bearer ${token}` } })
      .then(response => console.log(response))
      .catch(error => console.log(error.response));
  }

  return (
    <>
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <Button
          disabled={!request}
          title="Login"
          onPress={() => {
            promptAsync();
            }}
        />

        <Button title="GET PROFILE INFO" onPress={fetchProfile}/>
      </SafeAreaView>
    </>
  );
}
