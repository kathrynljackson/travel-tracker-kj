import $ from 'jquery';

import './css/index.scss';

import Traveler from './traveler.js'
import fetchRequests from '.fetchRequests.js'

let allTravelers;
let allTrips;
let allDestinations;
let traveler;


window.addEventListener('load', fetchRequests.getData);
window.addEventListener('load', retrieveData);
window.addEventListener('load', generateTraveler);

function retrieveData(){
  fetchRequests.getData()
  .then(responses => responses.map( response => response.json()))
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
