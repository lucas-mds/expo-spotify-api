import React from 'react';
import spotify_api from '../../config/spotify_api';
import UI from './layout';
import ms_formatter from '../../utils/format-ms';


const PlaylistScreen  = ({ navigation, route }) => {
  const { playlist_id } = route.params;
  const [trackItems, setTrackItems] = React.useState([]);


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

  React.useEffect(fetchTracks, []);

  return (
    <UI items={trackItems} />
  )
}

export default PlaylistScreen;