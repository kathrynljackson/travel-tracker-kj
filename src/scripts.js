//THIS IS NOT THE DROID YOU ARE LOOKING FOR
import $ from 'jquery';

import './css/index.scss';

import Traveler from './traveler.js';
import fetchRequests from './fetchRequests.js';
import domUpdates from './domUpdates.js';

let allTravelers;
let allTrips;
let allDestinations;
let traveler;
let travelerName;

let travelerGreeting = document.querySelector('.traveler-dashboard-greeting');


window.addEventListener('load', fetchRequests.getData);
window.addEventListener('load', retrieveData);
window.addEventListener('load', generateTraveler);
window.addEventListener('load', generateTravelerDashboard);

function retrieveData(){
  fetchRequests.getData()
  .then(responses => responses.map(response => response.json()))
  .then(([tra, tri, des]) => {
    allTravelers = tra.travelers;
    allTrips = tri.trips;
    allDestinations = des.destinations;
    generateTraveler();
    console.log(allTravelers);
    console.log(allTrips);
    console.log(allDestinations);
  })
}

function generateTraveler() {
  traveler = new Traveler(allTravelers[Math.floor(Math.random() * allTravelers.length)]);
}

function generateTravelerDashboard(){
  domUpdates.displayTravelerGreeting();
}
