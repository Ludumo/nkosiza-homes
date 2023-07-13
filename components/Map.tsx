import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const Map: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoibHVkdW1vIiwiYSI6ImNsYzZlYmtmZTJoamEzcXA4OXJibTJyZXcifQ.ZttGWXvKmOf-NnFwU_II3A';
    const map = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [18.5122, -33.9039],
      zoom: 12,
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
                  coordinates: [18.5122, -33.9039],
                },
                properties: {
                  title: 'Mapbox',
                  description: 'Cape, Town',
                },
              },
            ],
          },
        },
        layout: {
          'icon-image': 'monument-15',
          'icon-allow-overlap': true,
        },
      });
    });
  }, []);

  return <div ref={mapContainer} className="w-full h-64" />;
};

export default Map;
