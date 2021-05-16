import { Venue } from "./types";

export const fetchVenues = async (
  venueName: string,
  client_id: string,
  client_secret: string,
  useCache: boolean
): Promise<Venue[] | undefined> => {
  return fetch(
    "https://api.foursquare.com/v2/venues/search?client_id=" +
      client_id +
      "&client_secret=" +
      client_secret +
      "&v=20200226&near=London&query=" +
      venueName,
    {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      cache: useCache ? "force-cache" : "no-cache",
    }
    
  )
    .then((response) => response.json())
    .then((data) =>
      data?.response?.venues?.map((venue: any) => {
        return { id: venue.id, name: venue.name, location: venue.location,categories:venue.categories };
      })
    );
};
