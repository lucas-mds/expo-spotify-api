import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View } from 'react-native' 

import { setItem } from '../../utils/storage';
import { useGlobalContext } from '../../config/global-context';
import spotify_api from '../../config/spotify_api';
import UI from './layout';


export default function({ navigation }) {
  const { newState } = useGlobalContext();
  const [playlistItems, setPlaylistItems] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [filters, setFilters] = React.useState(null);

  const fetchPlaylists = () => {
    spotify_api.get('/v1/me/playlists')
      .then(response => {
        const items = response.data.items.map(item => ({
          id: item.id,
          primaryText: item.name,
          secondaryText: `${item.tracks.total} música${item.tracks.total > 1 ? 's' : ''}`,
          imageURL: item.images[0].url,
          public: item.public,
          collaborative: item.collaborative,
        }));

        setPlaylistItems(items);
      })
      .catch(error => console.log(error.response));
  }

  const onPlaylistPress = (playlist) => {
    navigation.navigate('Playlist', { playlist_id: playlist.id, title: playlist.primaryText });
  }

  const signOut = () => {
    newState({token: null})
    setItem('token', null)
    navigation.navigate('Login');
  }

  const openSearch = () => {
    setOpen(true);
  }

  const configFilter = (values) => {
    setFilters(values);
    setOpen(false);
  }

  const filterItems = (items) => {
    let filteredItems = items.map(item => item);
    if (filters !== null) {

      if (filters.string.length > 0) {
        filteredItems = filteredItems.filter(item => {
          const string = item.primaryText.toLowerCase();
          const searchString = filters.string.toLowerCase();
          return string.search(searchString) >= 0;
        })
      }

      if (filters.public) {
        filteredItems = filteredItems.filter(item => item.public === true)
      }

      if (filters.collaborative) {
        filteredItems = filteredItems.filter(item => item.collaborative === true)
      }

      return filteredItems;
    }

    return items;
  }

  React.useEffect(fetchPlaylists, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>
          <FontAwesome.Button name="search" backgroundColor="#5D4CC3" iconStyle={{ marginRight: 0 }} onPress={openSearch} />
          <FontAwesome.Button name="sign-out" backgroundColor="#5D4CC3" iconStyle={{ marginRight: 0 }} onPress={signOut} />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <UI
      items={filterItems(playlistItems)}
      onItemPress={onPlaylistPress} 
      searchConfig={{
        open,
        onBackdropPress: () => setOpen(false),
        formConfig: {
          configFilter,
          type: 'playlist',
        },
      }}
    />
  )
};
