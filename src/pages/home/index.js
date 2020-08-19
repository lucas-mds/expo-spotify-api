import React from 'react';
import { setItem } from '../../utils/storage';
import { useGlobalContext } from '../../config/global-context';
import spotify_api from '../../config/spotify_api';

import UI from './layout';

export default function({ navigation }) {
  const { newState } = useGlobalContext();
  const [playlistItems, setPlaylistItems] = React.useState([]);

  const fetchPlaylists = () => {
    spotify_api.get('/v1/me/playlists')
      .then(response => {
        const items = response.data.items.map(item => ({
          id: item.id,
          primaryText: item.name,
          secondaryText: `${item.tracks.total} música${item.tracks.total > 1 ? 's' : ''}`,
          imageURL: item.images[0].url,
        }));

        setPlaylistItems(items);
      })
      .catch(error => console.log(error.response));
  }

  const onPlaylistPress = (playlist) => {
    console.log('clicked ', playlist)

    navigation.navigate('Playlist', { playlist_id: playlist.id });
  }

  const signOut = () => {
    newState({token: null})
    setItem('token', null)
    navigation.navigate('Login');
  }

  React.useEffect(fetchPlaylists, []);

  return (
    <UI
      signOut={signOut}
      items={playlistItems}
      onItemPress={onPlaylistPress}
    />
  )
};
