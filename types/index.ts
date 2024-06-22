type MapsLocation = {
  name: string;
  address: string;
  lat: number;
  lng: number;
};

type MapsLocationWithId = MapsLocation & {
  id: number;
};
