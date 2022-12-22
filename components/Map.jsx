import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibHVkdW1vIiwiYSI6ImNsYmh2dDN0ZzB0dWkzb254M3dwdTBuNWcifQ.NdQsmIg4GcLs2zAImugO9Q'
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ 18.5122, -33.9039],
      zoom: 12
    });

    map.on('load', () => {
      map.addLayer({
        id: 'points',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [ 18.5122, -33.9039]
                },
                properties: {
                  title: 'Mapbox',
                  description: 'Cape, Town'
                }
              }
            ]
          }
        },
        layout: {
          'icon-image': 'monument-15',
          'icon-allow-overlap': true
        }
      });
    });
  }, []);

  return <div ref={mapContainer} className='w-full h-64' />;
};

export default Map;
