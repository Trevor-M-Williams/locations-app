import usePlacesAutocomplete from "use-places-autocomplete";

export function PlacesAutocomplete({
  onAddressSelect,
}: {
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
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });
  };

  return (
    <div className="">
      <input
        value={value}
        className="w-full rounded border border-gray-300 p-2"
        disabled={!ready}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your address or zip code"
      />

      {status === "OK" && (
        <ul className="mt-2 rounded border border-gray-300">
          {renderSuggestions()}
        </ul>
      )}
    </div>
  );
}
