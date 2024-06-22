"use client";
import { PlacesAutocomplete } from "@/components/places-autocomplete";
import { GoogleMapsIcon } from "@/components/ui/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import Link from "next/link";
import { useRef, useState } from "react";
import { getGeocode, getLatLng } from "use-places-autocomplete";

export default function Home() {
  const [mapCenter, setMapCenter] = useState({
    lat: 39.7392358,
    lng: -104.990251,
  });

  const mapOptions = {
    disableDefaultUI: true,
    clickableIcons: true,
    zoomControl: true,
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: ["places"],
  });

  const locations = [
    { id: 1, name: "Location 1", lat: 39.7592358, lng: -104.990251 },
    { id: 2, name: "Location 2", lat: 39.7092358, lng: -104.990251 },
    { id: 3, name: "Location 3", lat: 39.6592358, lng: -104.990251 },
    { id: 4, name: "Location 4", lat: 39.6092358, lng: -104.990251 },
    { id: 5, name: "Location 5", lat: 39.5592358, lng: -104.990251 },
  ];

  const mapRef = useRef<google.maps.Map | null>(null);

  const onMapLoad = (map: google.maps.Map) => {
    mapRef.current = map;
  };

  const panTo = ({ lat, lng }: { lat: number; lng: number }) => {
    if (!mapRef.current) return;
    mapRef.current?.panTo({ lat, lng });
    mapRef.current?.setZoom(14);
  };

  const handleLocationClick = (lat: number, lng: number) => {
    panTo({ lat, lng });
  };

  if (!isLoaded) return null;

  return (
    <div className="fixed inset-0 flex">
      <ScrollArea className="relative w-[32rem] overflow-auto bg-background p-4">
        <div className="sticky top-0 bg-background pb-4">
          <PlacesAutocomplete
            onAddressSelect={(address) => {
              getGeocode({ address: address }).then((results) => {
                const { lat, lng } = getLatLng(results[0]);
                setMapCenter({ lat, lng });
              });
            }}
          />
        </div>

        <ul className="divide-y">
          {locations.map((location) => (
            <li
              key={location.id}
              className="flex cursor-pointer items-center justify-between p-2 py-4 transition-colors hover:bg-gray-100"
              onClick={() => handleLocationClick(location.lat, location.lng)}
            >
              <div className="">
                <div className="font-semibold">{location.name}</div>
                <div>{"123 Fake St"}</div>
              </div>

              <Link href={`#`}>
                <GoogleMapsIcon />
              </Link>
            </li>
          ))}
        </ul>
      </ScrollArea>
      <GoogleMap
        options={mapOptions}
        zoom={12}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        onLoad={onMapLoad}
      >
        {locations.map((location) => (
          <MarkerF
            key={location.id}
            position={{ lat: location.lat, lng: location.lng }}
          />
        ))}
      </GoogleMap>
    </div>
  );
}
