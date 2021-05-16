import React, { useState } from "react";
import { fetchVenues } from "./ApiCaller";
import "./App.css";
import { DisplayVenue } from "./DisplayVenue";
import { Venue } from "./types";
import { isDateFiveMinsOld } from "./utils";

function App() {
  const [searchTimes, setSearchTimes] = useState<
    { nameOfSearch: string; lastedSearched: Date }[]
  >([]);
  const [currentResults, setCurrentResults] = useState<Venue[]>([]);
  const [apiClientId, setApiClientId] = useState<string>("");
  const [apiSecretId, setApiSecretId] = useState<string>("");
  const [currentVenueName, setVenueName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const callApi = () => {
    setLoading(true);
    const searchTimesToEdit = searchTimes;
    const lastSearched = searchTimes.find(
      (value) => value.nameOfSearch === currentVenueName
    )?.lastedSearched;

    if (lastSearched) {
      const indexToMod = searchTimes.findIndex(
        (value) => value.nameOfSearch === currentVenueName
      );
      searchTimesToEdit[indexToMod] = {
        nameOfSearch: currentVenueName,
        lastedSearched: new Date(),
      };
      setSearchTimes(searchTimesToEdit);
    } else {
      searchTimesToEdit.push({
        nameOfSearch: currentVenueName,
        lastedSearched: new Date(),
      });
      setSearchTimes(searchTimesToEdit);
    }

    const useCache = lastSearched ? isDateFiveMinsOld(lastSearched) : false;
    fetchVenues(currentVenueName, apiClientId, apiSecretId, useCache).then(
      (results) => {
        results && setCurrentResults(results);
      }
    );
    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Foursquare London API Caller</h1>
        <div className="inputWrapper">
          <input
            type="text"
            name="set apiClientId"
            placeholder="Set Api Client Id"
            onChange={(event) => {
              setApiClientId(event.target.value);
            }}
          />
        </div>
        <div className="inputWrapper">
          <input
            type="text"
            name="set apiSecretId"
            placeholder="Set Api Secret Id"
            onChange={(event) => {
              setApiSecretId(event.target.value);
            }}
          />
        </div>
        <div className="inputWrapper">
          <input
            type="text"
            name="set Venue Name"
            placeholder="Set Venue Name"
            onChange={(event) => {
              setVenueName(event.target.value);
            }}
          />
        </div>
        <div className="inputWrapper">
          <input onClick={() => callApi()} value="Call Api" type="button" />
        </div>
      </header>

      {loading ? (
        <p>loading....</p>
      ) : currentResults.length === 0 ? (
        <p>No Data To Display</p>
      ) : (
        <React.Fragment>
          {currentResults.map((venue) => (
            <DisplayVenue venue={venue} />
          ))}
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
