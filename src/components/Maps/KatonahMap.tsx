import React, { useCallback, useMemo, useRef } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { KatonahMapStyles } from "../../styles/Maps";

const KatonahMap: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: `${process.env.GATSBY_GOOGLE_MAPS_API_KEY}`,
  });
  const mapRef = useRef<google.maps.Map | null>(null);
  const centerMap = useMemo(() => ({ lat: 41.2587, lng: -73.6854 }), []);
  const centerMarker = useMemo(() => ({ lat: 41.256146, lng: -73.684138 }), []);
  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  if (!isLoaded) {
    return null;
  }

  return (
    <GoogleMap
      zoom={14}
      center={centerMap}
      mapContainerStyle={KatonahMapStyles}
      onLoad={onLoad}
    >
      <Marker position={centerMarker} />
    </GoogleMap>
  );
};

export default KatonahMap;
