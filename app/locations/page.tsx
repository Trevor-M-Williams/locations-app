"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

import { getGeocode, getLatLng } from "use-places-autocomplete";
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";

import { getLocations } from "@/server/actions/test";

import { PlacesAutocomplete } from "@/components/places-autocomplete";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GoogleMapsIcon } from "@/components/ui/icons";

export default function Locations() {
  const [locations, setLocations] = useState<MapsLocationWithId[]>([]);
  const [mapCenter, setMapCenter] = useState({
    lat: 33.7392358,
    lng: -104.990251,
  });
  const [mapZoom, setMapZoom] = useState(5);

  const libraries = useMemo(() => ["places"], []);

  const mapOptions = {
    disableDefaultUI: true,
    clickableIcons: true,
    zoomControl: true,
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any, // TODO: fix type
  });

  useEffect(() => {
    const fetchLocations = async () => {
      const locations = await getLocations();
      setLocations(locations);
    };
    fetchLocations();
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="absolute inset-0 flex">
      <ScrollArea className="relative w-[32rem] overflow-auto bg-background">
        <div className="sticky top-0 space-y-2 border-b bg-background px-4 py-6">
          <p>Find a location near you</p>
          <PlacesAutocomplete
            onAddressSelect={(address) => {
              getGeocode({ address: address }).then((results) => {
                const { lat, lng } = getLatLng(results[0]);
                setMapCenter({ lat, lng });
              });
            }}
          />
        </div>

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
                onClick={() => {
                  setMapCenter({ lat: location.lat, lng: location.lng });
                  setMapZoom(15);
                }}
              >
                <div className="">
                  <div className="font-medium">{location.name}</div>
                  <div className="text-sm text-gray-500">
                    {address1}
                    <br />
                    {address2}
                  </div>
                </div>

                <Link
                  href={href}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <GoogleMapsIcon />
                </Link>
              </li>
            );
          })}
        </ul>
      </ScrollArea>

      <GoogleMap
        options={mapOptions}
        zoom={mapZoom}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "100%", height: "100%" }}
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
