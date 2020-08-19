import React from 'react';
import { getItem, setItem } from '../../utils/storage';
import { useGlobalContext } from '../../config/global-context';
import spotify_api from '../../config/spotify_api';

import UI from './styles';

export default function({ navigation }) {
  const { newState } = useGlobalContext();

  const fetchPlaylists = () => {
    spotify_api.get('/v1/me/playlists', { headers: { Authorization: `Bearer ${token}` } })
      .then(response => console.log(response))
      .catch(error => console.log(error.response));
  }

  const signOut = () => {
    newState({token: null})
    setItem('token', null)
    navigation.navigate('Login');
  }

  return (
    <UI signOut={signOut} fetchPlaylists={fetchPlaylists} />
  )
};
