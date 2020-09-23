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
let loginButton = document.querySelector('.login-button');



let allTravelers;
let allTrips;
let allDestinations;
let traveler;
let createData = [];
let destination;
let travelerDestinations;
//let activateBookTripButton;
//let bookTripButton;
let CurrentTraveler = {};
let specificTraveler;

//window.addEventListener('load', fetchRequests.getData);
//window.addEventListener('load', retrieveData);
//window.addEventListener('load', generateTraveler);
plannerButton.addEventListener('click', domUpdates.showInfoForm);
filterTripButton.addEventListener('click', displayDestinations);
loginButton.addEventListener('click', login)

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

function retrieveSpecificData(id){
  fetchRequests.getSpecificData(id)
  .then(responses => Promise.all(responses.map(response => response.json())))
  .then(([tra, tri, des]) => {
    specificTraveler = tra.travelers;
    allTrips = tri.trips;
    allDestinations = des.destinations;

    generateTraveler();
  })
}

function login(){
console.log('Login function activated')
let userID = usernameInput.value[8]+usernameInput.value[9];
console.log(userID);
console.log(passwordInput.value);
fetchRequests.getSpecificData(userID);
}

function generateTraveler() {
  //traveler = new Traveler(allTravelers[Math.floor(Math.random() * allTravelers.length)]);
  traveler = new Traveler(specificTraveler);
  let travelerName = traveler.getFirstName();
  domUpdates.displayTravelerGreeting(travelerName);
  CurrentTraveler = traveler;
  console.log(CurrentTraveler);

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
  domUpdates.displayCurrentTrips(currentTrips, travelerDestinations);
  console.log('currentTrips', currentTrips)

  let pastTrips = findPastTrips(travelerApprovedTrips);
  domUpdates.displayPastTrips(pastTrips, travelerDestinations);

  let upcomingTrips = findUpcomingTrips(travelerApprovedTrips);
  domUpdates.displayUpcomingTrips(upcomingTrips, travelerDestinations);


  domUpdates.displayCostSpent(traveler);
}

function displayDestinations(){
  domUpdates.displayDestinationOptions(allDestinations, CurrentTraveler);
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

function findCurrentTrips(allTrips) {
 let currentTrips = allTrips.filter(trip => {
   return trip.current === true
 })
 return currentTrips
 console.log('currentTrips is running')
}

Date.prototype.addDays = function(days) {
  let date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

export default createData;
