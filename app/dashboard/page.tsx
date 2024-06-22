"use client";
import { PlacesAutocomplete } from "@/components/places-autocomplete";
import { getGeocode, getLatLng, getDetails } from "use-places-autocomplete";
import { useLoadScript } from "@react-google-maps/api";
import { addLocation } from "@/server/actions/test";

export default function Dashboard() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: ["places"],
  });

  if (!isLoaded) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <PlacesAutocomplete
        onAddressSelect={async (address) => {
          const results = await getGeocode({ address: address });
          const { lat, lng } = getLatLng(results[0]);
          const res = await addLocation({ lat, lng, address });
          if (res.error) {
            console.log(res.error);
          }
        }}
      />
    </div>
  );
}
