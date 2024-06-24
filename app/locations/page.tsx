"use client";
import { useEffect, useMemo, useState, useCallback } from "react";
import Link from "next/link";
import { getGeocode, getLatLng } from "use-places-autocomplete";
import {
  useLoadScript,
  GoogleMap,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
import { getLocations } from "@/server/actions/locations";
import { PlacesAutocomplete } from "@/components/places-autocomplete";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GoogleMapsIcon } from "@/components/ui/icons";

const useLocations = () => {
  const [locations, setLocations] = useState<MapsLocationWithId[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const locations = await getLocations();
      setLocations(locations);
    };
    fetchLocations();
  }, []);

  return locations;
};

const useMap = (
  initialCenter: { lat: number; lng: number },
  initialZoom: number,
) => {
  const [mapState, setMapState] = useState({
    center: initialCenter,
    zoom: initialZoom,
    selectedLocation: null as MapsLocationWithId | null,
    userLocation: null as MapsLocationWithId | null,
    isUserLocationOpen: false,
  });

  const setSelectedLocation = useCallback(
    (location: MapsLocationWithId | null) => {
      setMapState((prevState) => ({
        ...prevState,
        selectedLocation: location,
        isUserLocationOpen: location?.id === prevState.userLocation?.id,
        center: location
          ? { lat: location.lat, lng: location.lng }
          : prevState.center,
        zoom: location ? 15 : prevState.zoom,
      }));
    },
    [],
  );

  const setUserLocation = useCallback((location: MapsLocationWithId) => {
    setMapState((prevState) => ({
      ...prevState,
      userLocation: location,
      selectedLocation: location,
      center: { lat: location.lat, lng: location.lng },
      zoom: 15,
    }));
  }, []);

  return { mapState, setSelectedLocation, setUserLocation };
};

const LocationList = ({
  locations,
  setSelectLocation: setSelectedLocation,
}: {
  locations: MapsLocationWithId[];
  setSelectLocation: (location: MapsLocationWithId | null) => void;
}) => (
  <ul className="divide-y px-4">
    {locations.map((location) => {
      const href = new URL(
        `https://www.google.com/maps/?q=${location.address}`,
      );
      const address1 = location.address.split(",")[0];
      const address2 = location.address.split(",").slice(1).join(", ");

      return (
        <li
          key={location.id}
          className="flex cursor-pointer items-center justify-between p-2 py-4 transition-colors hover:bg-gray-100"
          onClick={() => setSelectedLocation(location)}
        >
          <div>
            <div className="font-medium">{location.name}</div>
            <div className="text-sm text-gray-500">
              {address1}
              <br />
              {address2}
            </div>
          </div>
          <Link href={href} onClick={(e) => e.stopPropagation()}>
            <GoogleMapsIcon />
          </Link>
        </li>
      );
    })}
  </ul>
);

const LocationInfoWindow = ({
  position,
  location,
  onCloseClick,
}: {
  position: { lat: number; lng: number };
  location: MapsLocationWithId;
  onCloseClick: () => void;
}) => {
  const href = new URL(`https://www.google.com/maps/?q=${location.address}`);
  const address1 = location.address.split(",")[0];
  const address2 = location.address.split(",").slice(1).join(", ");

  return (
    <InfoWindow position={position} onCloseClick={onCloseClick}>
      <div className="w-48 font-[Roboto,Arial] text-[13px] font-normal">
        <h2 className="mb-1 mr-8 text-[14px] font-medium">{location.name}</h2>
        <div className="mr-8">
          <p>{address1}</p>
          <p>{address2}</p>
          <Link
            href={href}
            className="text-[#1a73e8] hover:underline focus:outline-none"
          >
            View on Google Maps
          </Link>
        </div>
      </div>
    </InfoWindow>
  );
};
const MapMarkers = ({
  locations,
  userLocation,
  selectedLocation,
  setSelectedLocation,
}: {
  locations: MapsLocationWithId[];
  userLocation: MapsLocationWithId | null;
  selectedLocation: MapsLocationWithId | null;
  setSelectedLocation: (location: MapsLocationWithId | null) => void;
}) => (
  <>
    {userLocation && (
      <MarkerF
        position={userLocation}
        icon={{ url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" }}
        onClick={() => setSelectedLocation(userLocation)}
      >
        {selectedLocation?.id === userLocation.id && (
          <LocationInfoWindow
            position={{ lat: userLocation.lat, lng: userLocation.lng }}
            location={userLocation}
            onCloseClick={() => setSelectedLocation(null)}
          />
        )}
      </MarkerF>
    )}
    {locations.map((location) => (
      <MarkerF
        key={location.id}
        position={{ lat: location.lat, lng: location.lng }}
        icon={{ url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png" }}
        onClick={() => setSelectedLocation(location)}
      >
        {selectedLocation?.id === location.id && (
          <LocationInfoWindow
            position={{ lat: location.lat, lng: location.lng }}
            location={location}
            onCloseClick={() => setSelectedLocation(null)}
          />
        )}
      </MarkerF>
    ))}
  </>
);

export default function Locations() {
  const locations = useLocations();
  const { mapState, setSelectedLocation, setUserLocation } = useMap(
    { lat: 33.7392358, lng: -104.990251 },
    5,
  );

  const libraries = useMemo(() => ["places"], []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any, // TODO: fix type
  });

  if (!isLoaded) return null;

  return (
    <div className="absolute inset-0 flex">
      <div className="relative flex h-full w-[32rem] flex-col">
        <div className="space-y-2 border-b bg-background px-4 py-6">
          <p>Find a location near you</p>
          <PlacesAutocomplete
            onAddressSelect={(address) => {
              getGeocode({ address: address }).then((results) => {
                const { lat, lng } = getLatLng(results[0]);
                const newLocation = {
                  id: 0,
                  lat,
                  lng,
                  name: "Your Location",
                  address,
                };
                setUserLocation(newLocation);
                setSelectedLocation(newLocation);
              });
            }}
          />
        </div>

        <ScrollArea className="flex-grow overflow-auto bg-background">
          <LocationList
            locations={locations}
            setSelectLocation={setSelectedLocation}
          />
        </ScrollArea>
      </div>

      <GoogleMap
        options={{
          disableDefaultUI: true,
          clickableIcons: true,
          zoomControl: true,
        }}
        zoom={mapState.zoom}
        center={mapState.center}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        onClick={() => {
          setSelectedLocation(null);
        }}
      >
        <MapMarkers
          locations={locations}
          userLocation={mapState.userLocation}
          selectedLocation={mapState.selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
      </GoogleMap>
    </div>
  );
}
