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
//window.addEventListener('load', generateTravelerDashboard);
//window.addEventListener('load', consoleLog);

// function retrieveData(){
//   fetchRequests.getTravelerData();
//   fetchRequests.getTripData();
//   fetchRequests.getDestinationData();
//   createSingleTravelerData();
//   createTravelerData();
// }

function retrieveData(){
  fetchRequests.getData()
  .then(responses => Promise.all(responses.map(response => response.json())))
  .then(([tra, tri, des]) => {
    allTravelers = tra.travelers;
    allTrips = tri.trips;
    //.map(trip => new Trip(trip));
    allDestinations = des.destinations;
    //console.log('allTravelers inside retrieveData()', allTravelers);
    //console.log('allTrips inside retrieveData()',allTrips);
    //console.log('allDestinations inside retrieveData()', allDestinations);
    generateTraveler();
  })
}


function generateTraveler() {
  traveler = new Traveler(allTravelers[Math.floor(Math.random() * allTravelers.length)]);
  let travelerName = traveler.getFirstName();
  //traveler.name = travelerName; <--NO!!!!!
  console.log('traveler.name',traveler.name);
  domUpdates.displayTravelerGreeting(travelerName);

  // let travelerID = traveler.id;
  let trip = new Trip(allTrips);
  let travelerTrips = trip.findMyTrips(traveler.id);
  traveler.trips = travelerTrips;
  console.log('travelerTrips',travelerTrips);
  console.log('traveler.trips',traveler.trips);

  let travelerApprovedTrips = trip.findMyApprovedTrips(traveler.id);
  console.log('travelerApprovedTrips',travelerApprovedTrips);

  let travelerPendingTrips = trip.findMyPendingTrips(traveler.id);
  console.log('travelerPendingTrips',travelerPendingTrips);


  let destination = new Destination(allDestinations);


  travelerDestinations = travelerTrips.map(trip => {
    return destination.getDestinationDetails(trip.destinationID);
  });
  console.log('travelerDestinations',travelerDestinations)

  let tripCosts = travelerDestinations.map(place => {
    let destination = new Destination(travelerDestinations);
    let travelerAmountSpent = 0;
    return travelerAmountSpent+= destination.calculateCost(place);
 });
  traveler.amountSpent = tripCosts.reduce((sum, cv) => {
    return sum + cv
  }, 0);
  console.log(tripCosts);
  console.log(traveler.amountSpent);

  // let myPastTrips = trip.findPastTrips(travelerTrips);
  // console.log('myPastTrips', myPastTrips);
  //
  // let myPendingTrips = trip.findMyPendingTrips(travelerTrips);
  // console.log('myPendingTrips', myPendingTrips);
//today.getTime is not a function



  //domUpdates.displayAllTrips(traveler, travelerDestinations);
  domUpdates.displayApprovedTrips(travelerApprovedTrips, travelerDestinations);
  domUpdates.displayPendingTrips(travelerPendingTrips, travelerDestinations);
  domUpdates.displayCostSpent(traveler);







}



export default createData;
