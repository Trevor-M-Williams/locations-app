"use client";
import { useState, useEffect } from "react";
import { PlacesAutocomplete } from "@/components/places-autocomplete";
import { getGeocode, getLatLng } from "use-places-autocomplete";
import { useLoadScript } from "@react-google-maps/api";
import { addLocation, updateLocation } from "@/server/actions/locations";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil, Plus } from "lucide-react";

export function LocationModal({ data }: { data?: MapsLocationWithId }) {
  const mode = data ? "update" : "add";
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (mode === "update" && data) {
      setName(data.name);
      setAddress(data.address);
    }
  }, [mode, data]);

  const handleAddOrUpdate = async () => {
    setIsLoading(true);
    try {
      const results = await getGeocode({ address });
      const { lat, lng } = getLatLng(results[0]);
      let res;
      if (mode === "add") {
        res = await addLocation({ name, address, lat, lng });
      } else {
        if (!data) {
          throw new Error("No existing data");
        }

        res = await updateLocation({
          id: data.id,
          name,
          address,
          lat,
          lng,
        });
      }
      if (res.error) {
        setError(res.error);
      } else {
        console.log(res);
        setIsModalOpen(false);
      }
    } catch (e) {
      setError(`Failed to ${mode} location`);
    }
    setIsLoading(false);
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: ["places"],
  });

  if (!isLoaded)
    return (
      <>
        {mode === "add" ? (
          <Button variant={"outline"} size={"icon"} className="size-8">
            <Plus />
          </Button>
        ) : (
          <Pencil className="size-4 cursor-pointer hover:text-gray-800" />
        )}
      </>
    );

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        {mode === "add" ? (
          <Button variant={"outline"} size={"icon"} className="size-8">
            <Plus />
          </Button>
        ) : (
          <Pencil className="size-4 cursor-pointer hover:text-gray-800" />
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {mode === "add" ? "Add Location" : "Update Location"}
          </DialogTitle>
        </DialogHeader>
        {error && <div className="text-red-500">{error}</div>}
        <div className="space-y-2">
          <Label>Name</Label>
          <Input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label>Address</Label>
          <PlacesAutocomplete
            defaultValue={address}
            onAddressSelect={async (selectedAddress) => {
              setAddress(selectedAddress);
            }}
          />
        </div>
        <div className="flex">
          <Button disabled={isLoading} onClick={handleAddOrUpdate}>
            {isLoading
              ? `${mode === "add" ? "Adding" : "Updating"}...`
              : mode === "add"
                ? "Add"
                : "Update"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
