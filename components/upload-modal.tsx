"use client";
import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { getGeocode, getLatLng } from "use-places-autocomplete";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CircleX, Edit, Trash, Upload, X } from "lucide-react";
import { addLocations } from "@/server/actions/locations";
import { cn } from "@/lib/utils";

export function UploadModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [parsedData, setParsedData] = useState<any[]>([]);

  async function handleUpload() {
    setError("");
    setIsLoading(true);

    const res = await addLocations(parsedData);
    if (res.error) {
      setError(res.error);
      setIsLoading(false);
      return;
    }

    setIsModalOpen(false);
    setIsLoading(false);
    setError("");
    setFile(null);
    setParsedData([]);
  }

  const handleUpdate = (item: any) => {
    console.log(item);
  };

  const handleDelete = (item: any) => {
    const newData = parsedData.filter((data) => data.name !== item.name);
    setParsedData(newData);
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      setError("");
      parseCSV(acceptedFiles[0]);
    } else {
      setError("Please upload a valid CSV file.");
    }
  }, []);

  function parseCSV(file: File) {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = async (e) => {
      const text = e.target?.result;
      if (!text || typeof text !== "string") return;

      const rows = text.split("\n");
      const data = await Promise.all(
        rows.map(async (row) => {
          const name = row.split(",")[0];
          const address = row.split(",").slice(1).join(",").replace(/"/g, "");
          if (
            !name ||
            !address ||
            name.toLowerCase() === "name" ||
            address.toLowerCase() === "address"
          )
            return;
          const { lat, lng } = await geocodeAddress(address);
          return { name, address, lat, lng };
        }),
      );

      setParsedData(data.filter(Boolean));
    };
  }

  const geocodeAddress = async (address: string) => {
    try {
      const results = await getGeocode({ address });
      const { lat, lng } = getLatLng(results[0]);
      return { lat, lng };
    } catch (error) {
      setError(
        "One or more locations are not valid. You must update/delete the location in order to upload.",
      );
      return { lat: null, lng: null };
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
    },
    multiple: false,
  });

  useEffect(() => {
    if (parsedData.length > 0) {
      const invalidLocations = parsedData.filter(
        (location) => !location.lat || !location.lng,
      );
      if (invalidLocations.length > 0) {
        setError(
          "One or more locations are not valid. You must update/delete the location in order to upload.",
        );
        return;
      }
    }

    setError("");
  }, [parsedData]);

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <Button variant={"outline"} size={"icon"} className="size-8 p-[5px]">
          <Upload />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload Locations</DialogTitle>
        </DialogHeader>
        {error && <div className="text-red-500">{error}</div>}

        {isLoading ? (
          <div className="text-gray-500">Uploading...</div>
        ) : (
          <>
            {file ? (
              <div>
                <div className="mb-2 flex items-center gap-4">
                  <p className="font-medium">{file.name}</p>
                  <CircleX
                    className="size-4 cursor-pointer text-red-500"
                    onClick={() => {
                      setError("");
                      setFile(null);
                      setParsedData([]);
                    }}
                  />
                </div>

                <div className="mb-4 flex max-h-80 flex-col gap-4 overflow-auto">
                  {parsedData.map((item) => {
                    const { name, address, lat, lng } = item;
                    let invalidData = false;
                    if (!name || !address || !lat || !lng) {
                      invalidData = true;
                    }

                    return (
                      <div
                        key={item.name}
                        className={cn("p-2", invalidData && "bg-red-50")}
                      >
                        <div className="relative flex items-center justify-between">
                          <p className="font-medium">{item.name}</p>
                          {invalidData && (
                            <div className="flex gap-2">
                              <Edit
                                className="size-4 cursor-pointer text-gray-500"
                                onClick={() => handleUpdate(item)}
                              />
                              <Trash
                                className="size-4 cursor-pointer text-gray-500"
                                onClick={() => handleDelete(item)}
                              />
                            </div>
                          )}
                        </div>
                        <p>Address: {item.address}</p>
                        <p>Latitude: {item.lat}</p>
                        <p>Longitude: {item.lng}</p>
                      </div>
                    );
                  })}
                </div>

                <Button
                  onClick={handleUpload}
                  disabled={parsedData.length === 0 || error !== ""}
                >
                  Upload
                </Button>
              </div>
            ) : (
              <div
                {...getRootProps()}
                className="border-2 border-dashed border-gray-300 px-4 py-12 text-center"
              >
                <input {...getInputProps()} />
                <p>Drag & drop or click to select</p>
              </div>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
