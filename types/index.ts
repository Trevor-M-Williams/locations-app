type MapsLocation = {
  name: string;
  address: string;
  lat: number;
  lng: number;
  distance?: number;
};

type MapsLocationWithId = MapsLocation & {
  id: number;
};
