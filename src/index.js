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


//let bookTripButton = document.querySelector('.book-trip-button');
let travelerGreeting = document.querySelector('.traveler-dashboard-greeting');
let plannerButton = document.querySelector('.planner-button');
let filterTripButton = document.querySelector('.filter-trip-button');
let durationInput = document.querySelector('.planner-input-duration');
let travelersAmountInput = document.querySelector('.planner-input-travelers');
let dateInput = document.querySelector('.planner-input-date');
let usernameInput = document.querySelector('.username-input');
let passwordInput = document.querySelector('.password-input');



let allTravelers;
let allTrips;
let allDestinations;
let traveler;
let createData = [];
let destination;
//let activateBookTripButton;
//let bookTripButton;
let currentTraveler = {};


window.addEventListener('load', fetchRequests.getData);
window.addEventListener('load', retrieveData);
//window.addEventListener('load', generateTraveler);
plannerButton.addEventListener('click', domUpdates.showInfoForm);
filterTripButton.addEventListener('click', displayDestinations);



function retrieveData(){
  fetchRequests.getData()
  .then(responses => Promise.all(responses.map(response => response.json())))
  .then(([tra, tri, des]) => {
    allTravelers = tra.travelers;
    allTrips = tri.trips;
    allDestinations = des.destinations;
    console.log(allTrips);
    console.log(allTravelers);
    console.log(allDestinations);
    console.log('retrieveData is running')
    generateTraveler();
  })
}

function generateTraveler() {
  currentTraveler = new Traveler(allTravelers[Math.floor(Math.random() * allTravelers.length)]);
  let travelerName = currentTraveler.getFirstName();
  domUpdates.displayTravelerGreeting(travelerName);
  console.log('Generate traveler is running', currentTraveler);

  //displayTravelerTrips();
  displayTravelerCost(currentTraveler);
  setTrips();
}

function setTrips(){
  let trip = new Trip(allTrips)

  let travelerTrips = trip.findMyTrips(currentTraveler.id)
  currentTraveler.trips = travelerTrips;

  let approvedTrips = trip.findMyApprovedTrips(currentTraveler.id);
  currentTraveler.approvedTrips = approvedTrips;

  let pendingTrips = trip.findMyPendingTrips(currentTraveler.id);
  currentTraveler.pendingTrips = pendingTrips

  let currentTrips = findCurrentTrips(approvedTrips);
  currentTraveler.currentTrips = currentTrips

  let pastTrips = findPastTrips(approvedTrips);
  currentTraveler.pastTrips = pastTrips

  determineWithinRange(currentTraveler.approvedTrips);

  let myDestinations =

  console.log('setTrips is running')

  displayTravelerTrips();
}



function findCurrentTrips(allTrips) {
 let currentTrips = allTrips.filter(trip => {
   return trip.current === true
 })
 return currentTrips
 console.log('currentTrips is running')
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



function displayTravelerTrips(){
  domUpdates.displayCurrentTrips(currentTraveler.currentTrips, currentTraveler.destinations);
  domUpdates.displayPastTrips(currentTraveler.pastTrips, currentTraveler.destinations);
  domUpdates.displayUpcomingTrips(currentTraveler.approvedTrips, currentTraveler.destinations);
  domUpdates.displayPendingTrips(currentTraveler.pendingTrips, currentTraveler.destinations);
}


function displayTravelerCost(currentTraveler){
  let travelerDestinations = currentTraveler.trips.map(trip => {
    return destination.getDestinationDetails(trip.destinationID);
  });

  currentTraveler.destinations = travelerDestinations;

  let tripCosts = currentTraveler.destinations.map(place => {
    let destination = new Destination(currentTraveler.destinations);
    let travelerAmountSpent = 0;
    return travelerAmountSpent+= destination.calculateCost(place);
 });

  currentTraveler.amountSpent = tripCosts.reduce((sum, cv) => {
    return sum + cv
  }, 0);
  domUpdates.displayCostSpent(currentTraveler);
}

function displayDestinations(){
  let destination = new Destination(allDestinations);

  currentTraveler.destinations = currentTraveler.trips.map(trip => {
    return destination.getDestinationDetails(trip.destinationID);
  });

  domUpdates.displayDestinationOptions(allDestinations, currentTraveler);
}



Date.prototype.addDays = function(days) {
  let date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
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

export default createData;
