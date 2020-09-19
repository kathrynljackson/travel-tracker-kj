// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import Traveler from './traveler.js'
import fetchRequests from './fetch-requests.js'

let allTravelers;
let allTrips;
let allDestinations;
let traveler;

window.addEventListener('load', fetchRequests.getData);
window.addEventListener('load', retrieveData);
//window.addEventListener('load', consoleLog);
//window.addEventListener('load', generateTraveler);

function retrieveData(){
  fetchRequests.getTravelerData();
  fetchRequests.getTripData();
  fetchRequests.getDestinationData();
}

let createData = {
  createSingleTravelerData(travelerData) {
    traveler = new Traveler(travelerData)
  },

  createTravelerData(travelerData) {
    allTravelers = travelerData;
  },

  createTripData(tripData) {
    allTrips = tripData;
  },

  createDestinationData(destinationData) {
    allDestinations = destinationData;
  }
}

function consoleLog(){
  console.log('allTravelers', allTravelers);
  console.log('allTrips', allTrips)
  console.log('allDestinations', allDestinations)
  console.log('fetch function', fetchRequests)
}

consoleLog();


// function generateTraveler() {
//   traveler = new Traveler(allTravelers[Math.floor(Math.random() * allTravelers.length)]);
// }

export default createData;
