import React from 'react';
import spotify_api from '../../config/spotify_api';
import UI from './layout';
import ms_formatter from '../../utils/format-ms';

// 
import { FontAwesome } from '@expo/vector-icons';
import { View } from 'react-native';

const PlaylistScreen  = ({ navigation, route }) => {
  const { playlist_id } = route.params;
  const [trackItems, setTrackItems] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [filters, setFilters] = React.useState(null);


  const fetchTracks = () => {
    spotify_api.get(`/v1/playlists/${playlist_id}/tracks`)
      .then(response => {
        const items = response.data.items
          .map(item => (
            {
              id: item.track.id,
              primaryText: item.track.name,
              secondaryText: item.track.artists[0].name,
              detailsText: ms_formatter(item.track.duration_ms),
              imageURL: item.track.album.images[0].url,
            }
          ))
        setTrackItems(items);
      })
      .catch(error => console.log(error))
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
          const string2 = item.secondaryText.toLowerCase();
          const searchString = filters.string.toLowerCase();
          return string.search(searchString) >= 0 || string2.search(searchString) >= 0;
        })
      }
    }

    return filteredItems;
  }
  
  React.useEffect(fetchTracks, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>
          <FontAwesome.Button name="search" backgroundColor="#5D4CC3" iconStyle={{ marginRight: 0 }}  onPress={openSearch} />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <UI
      items={filterItems(trackItems)}
      searchConfig={{
        open,
        onBackdropPress: () => setOpen(false),
        formConfig: {
          configFilter,
          type: 'tracks',
        },
      }}
    />
  )
}

export default PlaylistScreen;