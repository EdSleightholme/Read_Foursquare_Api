## TO RUN 

cmd line to dictionary. type in `npm i` and then `npm run start` in cmd line

# THE TASK
Build a small app to search for restaurants in London using the Foursquare API. Feel free to use any library or framework of choice.

## User Story
A user visits a website with three text fields:

- Foursquare API Client ID
- Foursquare API Client Secret
- Venue Name

After entering the API Client ID/Secret and venue name, the user is presented with a list of venues to choose from. Clicking on a venue in the list should display details about the venue, including the venue's address and category (Coffee Shop, Gastropub, etc).

The website should cache search results for five minutes. When the user searches for a venue name that has been previously queried within the last five minutes, the page should display cached results rather than performing a new request to the Foursquare API.

## Requirements
- App must work as described in the User Story.
- Showcase your CSS chops. Try and do some amount of original CSS styling.
- Include a README alongside your code test detailing how to run it.

Follow the directions from the recruiter on how to submit the exercise. Please do not publish your code publicly on GitHub or any other site.

## Nice to haves
- TypeScript Support
- Unit Tests

## Resources

#### Obtaining Foursquare Credentials
To get access to the Foursquare API you need to create a developer account. Follow the steps in the [Foursquare docs](https://developer.foursquare.com/docs/api) to:
- Sign up
- Create an app (your app URL can be localhost)
- Obtain your Client ID and Client Secret

#### Foursquare Venue Search Endpoint
- [Foursquare docs](https://developer.foursquare.com/docs/places-api/)
- https://api.foursquare.com/v2/venues/search?near=London&query={venueName}&client_id={CLIENT_ID}&client_secret={CLIENT_SECRET}&v=20200226

# Overview
I made this application using typescript and react. When entering a valid client id and secret and a query you click the call api button and it  displays the names of the results in a list below. Clicking on a name brings up a modal with more details about the venue clicked on.

Also it has a in built cache options system so that if the same query has been made within 5 mins it will used a cached version of the data instead of call the api again.


## Files Used
### ApiCaller.ts
Contains a method called fetchVenues that deal with calling the API. It is passed the variables needed for a query and makes sure the info is  configured in to the api call correctly. Then it returns a promise with the returned query types.

### App.css 
Contains all styles used though out the app. This could be in future broken down and each component would have its owen css document .

### App.tsx
Contains main body of the app contains most of the stored state data within the application. It also is used to give a basic layout to the page.

### Modal.tsx
Is a small component used to generate Modals simply for the application. It is generic enough to be used for anything.

### Types.ts
Stores all custom types used within the application. Has venues that describes shape of a venues data. Off of that are the 2 other types address and catergoryies that currently are only used as part of the venues type.

### Utils.ts
Contains useful small methods. Only contains isDateFiveMinsOld  that sees if a date given is more than 5 mins old.

## Improvements for the future 

### Add unit tests using Jest
Needs tests for the api caller api and each component  

### Turn the header section into its own component

### Error messaging for the inputs to say what is going wrong 