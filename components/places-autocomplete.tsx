import usePlacesAutocomplete from "use-places-autocomplete";
import { Input } from "@/components/ui/input";

export function PlacesAutocomplete({
  defaultValue,
  onAddressSelect,
}: {
  defaultValue?: string;
  onAddressSelect: (address: string) => void;
}) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: { componentRestrictions: { country: "us" } },
    debounce: 300,
    cache: 86400,
  });

  const renderSuggestions = () => {
    return data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
        description,
      } = suggestion;

      return (
        <li
          key={place_id}
          onClick={() => {
            setValue(description, false);
            clearSuggestions();
            onAddressSelect && onAddressSelect(description);
          }}
          className="cursor-pointer p-2 hover:bg-gray-200"
        >
          <span className="font-semibold">{main_text}</span>{" "}
          <span className="text-gray-500">{secondary_text}</span>
        </li>
      );
    });
  };

  return (
    <div className="relative">
      <Input
        value={value || defaultValue}
        className="w-full rounded border border-gray-300 p-2"
        disabled={!ready}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your address or zip code"
      />

      {status === "OK" && (
        <ul className="absolute z-10 mt-2 rounded border border-gray-300 bg-background">
          {renderSuggestions()}
        </ul>
      )}
    </div>
  );
}
