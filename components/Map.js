import { Component } from 'react';
import ReactMapGL from 'react-map-gl';

class Map extends Component {
  state = {
    viewport: {
      width: '90vw',
      height: '80vh',
      latitude: -2.979165,
      longitude: 15.572003,
      zoom: 2.1
    }
  };

  render() {
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1Ijoid2lkZXNwcmVhZCIsImEiOiJjazh1ZGplYnAwOXhkM2ZwNHRhODNpazd6In0.sCIEptEwYBASZnZkJ8px1A"
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      />
    );
  }
}

export default Map;