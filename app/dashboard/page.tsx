import { LocationModal } from "@/components/location-modal";
import { getLocations } from "@/server/actions/locations";
import { LocationControls } from "@/components/location-controls";
import { UploadModal } from "@/components/upload-modal";

export default async function Dashboard() {
  const locations = await getLocations();

  return (
    <div className="flex size-full">
      <div className="mx-auto w-full max-w-4xl p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Ricava Tequila</h1>
          <div className="flex items-center gap-2">
            <LocationModal />
            <UploadModal />
          </div>
        </div>

        <table className="mt-4 min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Address
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {locations.map((location) => (
              <tr key={location.id} className="group relative">
                <td className="px-6 py-4 text-sm text-gray-900">
                  {location.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {location.address}
                </td>
                <td className="absolute right-2 hidden h-full items-center justify-end group-hover:flex">
                  <LocationControls location={location} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
