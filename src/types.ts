export interface Venue {
  id: string;
  name: string;
  location: Address;
  categories: [Category];
}

interface Address {
  addressFirstLine: string;
  crossStreet: string;
  lat: number;
  lng: number;
  distanceFromUser: number;
  postalCode: string;
  cc: string;
  city: string;
  state:string;
  country:string;
  formattedAddress: [string];
}

interface Category {
  id: string;
      name: string;
      pluralName:string;
      shortName: string;
      icon: string;
      primary: boolean;
}
