"use client";

import { Trash } from "lucide-react";
import { LocationModal } from "./location-modal";
import { deleteLocation } from "@/server/actions/locations";

export function LocationControls({
  location,
}: {
  location: MapsLocationWithId;
}) {
  return (
    <div className="flex items-center space-x-2 text-gray-500">
      <LocationModal data={location} />
      <Trash
        className="size-4 cursor-pointer hover:text-gray-800"
        onClick={async () => {
          const { success } = await deleteLocation(location.id);
          if (!success) {
            console.error("Failed to delete location");
          }
        }}
      />
    </div>
  );
}
