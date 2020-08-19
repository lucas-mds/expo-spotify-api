import React from 'react';
import spotify_api from '../../config/spotify_api';
import UI from './layout';


export default function ({ navigation, route }) {
  const { playlist_id } = route.params;
  const [trackItems, setTrackItems] = React.useState([]);


  const fetchTracks = () => {
    spotify_api.get(`/v1/playlists/${playlist_id}`)
      .then(response => {
        console.log(response.data)
        const items = response.data.items
          .map(item => (
            {
              id: item.track.id,
              primaryText: item.track.name,
              secondaryText: item.track.artists[0].name,
              imageURL: item.track.album.images[0].url,
            }
          ))
        console.log(items)
        // setTrackItems(items);
      })
      .catch(error => console.log(error))
  }

  React.useEffect(fetchTracks, []);

  return (
    <UI items={trackItems} />
  )
}