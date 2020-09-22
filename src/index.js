// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


import Traveler from './traveler.js';
import Trip from './trip.js';
import Destination from './destination.js';
import fetchRequests from './fetch-requests.js';
import domUpdates from './domUpdates.js';


let travelerGreeting = document.querySelector('.traveler-dashboard-greeting');
let plannerButton = document.querySelector('.planner-button');
let filterTripButton = document.querySelector('.filter-trip-button');


let allTravelers;
let allTrips;
let allDestinations;
let traveler;
//let travelerName;
let createData = [];
//let trip;
let destination;
let travelerDestinations;





window.addEventListener('load', fetchRequests.getData);
window.addEventListener('load', retrieveData);
window.addEventListener('load', generateTraveler);
plannerButton.addEventListener('click', domUpdates.showInfoForm);
filterTripButton.addEventListener('click', displayDestinations);

function retrieveData(){
  fetchRequests.getData()
  .then(responses => Promise.all(responses.map(response => response.json())))
  .then(([tra, tri, des]) => {
    allTravelers = tra.travelers;
    allTrips = tri.trips;
    allDestinations = des.destinations;

    generateTraveler();
  })
}


function generateTraveler() {
  traveler = new Traveler(allTravelers[Math.floor(Math.random() * allTravelers.length)]);
  let travelerName = traveler.getFirstName();
  domUpdates.displayTravelerGreeting(travelerName);

  let trip = new Trip(allTrips);
  let travelerTrips = trip.findMyTrips(traveler.id);
  traveler.trips = travelerTrips;

  let travelerApprovedTrips = trip.findMyApprovedTrips(traveler.id);

  let travelerPendingTrips = trip.findMyPendingTrips(traveler.id);

  let destination = new Destination(allDestinations);


  travelerDestinations = travelerTrips.map(trip => {
    return destination.getDestinationDetails(trip.destinationID);
  });

  let tripCosts = travelerDestinations.map(place => {
    let destination = new Destination(travelerDestinations);
    let travelerAmountSpent = 0;
    return travelerAmountSpent+= destination.calculateCost(place);
 });
  traveler.amountSpent = tripCosts.reduce((sum, cv) => {
    return sum + cv
  }, 0);

  determineWithinRange(travelerTrips);

  let currentTrips = findCurrentTrips(travelerApprovedTrips);
  domUpdates.displaycurrentTrips(currentTrips, travelerDestinations);

  let pastTrips = findPastTrips(travelerApprovedTrips);
  domUpdates.displayPastTrips(pastTrips, travelerDestinations);

  let upcomingTrips = findUpcomingTrips(travelerApprovedTrips);
  domUpdates.displayUpcomingTrips(upcomingTrips, travelerDestinations);

  domUpdates.displayPendingTrips(travelerPendingTrips, travelerDestinations);
  domUpdates.displayCostSpent(traveler);

}

function displayDestinations(){
  domUpdates.displayDestinationOptions(allDestinations);
  console.log('displayDestinations',allDestinations);
}

function filterPotentialTrips(){

}

function findPastTrips(allTrips) {
  let today = new Date(Date.now())
  let pastTrips = allTrips.filter(eachTrip => {
   return new Date(eachTrip.date) < today && eachTrip.current === false;
  })
  return pastTrips;
}

function findUpcomingTrips(allTrips) {
 let today = new Date(Date.now())
 let upcomingTrips = allTrips.filter(eachTrip => {
   return new Date(eachTrip.date) > today && eachTrip.current === false;
 })
 return upcomingTrips;
}

function determineWithinRange(allTrips) {
 let today = new Date(Date.now());
 let findEndDate = allTrips.forEach(trip => {
   trip.lastDay = new Date(trip.date).addDays(trip.duration)
 })
 let isCurrent = allTrips.forEach(trip => {
  if((new Date(trip.date)) < today && trip.lastDay > today) {
    trip.current = true
  } else {
  trip.current = false
  }
 })
}

function findCurrentTrips(allTrips) {
 let currentTrips = allTrips.filter(trip => {
   return trip.current === true
 })
 return currentTrips
}

Date.prototype.addDays = function(days) {
  let date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}





export default createData;
