import Traveler from './traveler.js';
import traveler from './index.js';
import travelerGreeting from './index.js';
import Destination from './destination.js';
import destination from './index.js';
import createData from './index.js';


let domUpdates = {

  displayTravelerGreeting(travelerName) {
    document.querySelector('.traveler-dashboard-greeting').innerText = 'Welcome, '+travelerName+'!';
    console.log('displayTravelerGreeting is running');
    //it needs to be travelerName, not traveler.name
 },

  // displayAllTrips(traveler, travelerDestinations) {
  //   let destination = new Destination(travelerDestinations);
  //
  //   let separateTrips = traveler.trips.forEach(trip => {
  //     let destinationInfo = destination.getDestinationDetails(trip.destinationID);
  //     document.querySelector('.upcoming-trips-info').innerHTML +=
  //     `<section class='new-trip-info'>
  //         <p><a>Destination:</a> ${destinationInfo.destination}</p>
  //         <p><a>Date:</a> ${trip.date}</p>
  //         <p><a>Duration:</a> ${trip.duration} days</p>
  //         <p><a>Status:</a> ${trip.status}</p>
  //       </section>`
  //   });
  //   console.log('displayAllTrips is running');
  // },

  // displayApprovedTrips(travelerApprovedTrips, travelerDestinations) {
  //   let destination = new Destination(travelerDestinations);
  //   let separateTrips = travelerApprovedTrips.forEach(trip => {
  //     let destinationInfo = destination.getDestinationDetails(trip.destinationID);
  //     document.querySelector('.upcoming-trips-info').innerHTML +=
  //     `<section class='new-trip-info'>
  //         <p><a>Destination:</a> ${destinationInfo.destination}</p>
  //         <p><a>Date:</a> ${trip.date}</p>
  //         <p><a>Duration:</a> ${trip.duration} days</p>
  //         <p><a>Status:</a> ${trip.status}</p>
  //       </section>`
  //   });
  //   console.log('displayApprovedTrips is running');
  // },

  displayUpcomingTrips(upcomingTrips, travelerDestinations) {
    let destination = new Destination(travelerDestinations);
    let separateTrips = upcomingTrips.forEach(trip => {
      let destinationInfo = destination.getDestinationDetails(trip.destinationID);
      document.querySelector('.upcoming-trips-info').innerHTML +=
      `<section class='new-trip-info'>
          <p><a>Destination:</a> ${destinationInfo.destination}</p>
          <p><a>Date:</a> ${trip.date}</p>
          <p><a>Duration:</a> ${trip.duration} days</p>
          <p><a>Status:</a> ${trip.status}</p>
        </section>`
    });
    console.log('displayUpcomingTrips is running');
  },

  displayPastTrips(pastTrips, travelerDestinations) {
    let destination = new Destination(travelerDestinations);
    let separateTrips = pastTrips.forEach(trip => {
      let destinationInfo = destination.getDestinationDetails(trip.destinationID);
      document.querySelector('.past-trips-info').innerHTML +=
      `<section class='new-trip-info'>
          <p><a>Destination:</a> ${destinationInfo.destination}</p>
          <p><a>Date:</a> ${trip.date}</p>
          <p><a>Duration:</a> ${trip.duration} days</p>
          <p><a>Status:</a> ${trip.status}</p>
        </section>`
    });
    console.log('displayUpcomingTrips is running');
  },

  displayPendingTrips(travelerPendingTrips, travelerDestinations) {
    let destination = new Destination(travelerDestinations);
    let separateTrips = travelerPendingTrips.forEach(trip => {
      let destinationInfo = destination.getDestinationDetails(trip.destinationID);
      document.querySelector('.pending-trips-info').innerHTML +=
      `<section class='new-trip-info'>
          <p><a>Destination:</a> ${destinationInfo.destination}</p>
          <p><a>Date:</a> ${trip.date}</p>
          <p><a>Duration:</a> ${trip.duration} days</p>
          <p><a>Status:</a> ${trip.status}</p>
        </section>`
    });
    console.log('displayPendingTrips is running');
  },

  displayCostSpent(traveler) {
    let amountInDollars = traveler.amountSpent.toFixed(2)
    document.querySelector('.traveler-expenses-amount').innerText = `$${amountInDollars}`;
  }
}

export default domUpdates;
