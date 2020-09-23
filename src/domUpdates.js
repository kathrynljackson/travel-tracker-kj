import Traveler from './traveler.js';
import traveler from './index.js';
import travelerGreeting from './index.js';
import Destination from './destination.js';
import destination from './index.js';
import createData from './index.js';
import fetchRequests from './fetch-requests.js';
import CurrentTraveler from './index.js'

let durationInput = document.querySelector('.planner-input-duration');
let travelersAmountInput = document.querySelector('.planner-input-travelers');
let dateInput = document.querySelector('.planner-input-date');

let domUpdates = {

  displayTravelerGreeting(travelerName) {
    document.querySelector('.traveler-dashboard-greeting').innerText = 'Welcome, '+travelerName+'!';
 },

  displayCurrentTrips(currentTrips, travelerDestinations) {
    let destination = new Destination(travelerDestinations);
    let separateTrips = currentTrips.forEach(trip => {
      let destinationInfo = destination.getDestinationDetails(trip.destinationID);
      document.querySelector('.current-trips-info').innerHTML +=
      `<section class='new-trip-info'>
          <p><a>Destination:</a> ${destinationInfo.destination}</p>
          <p><a>Date:</a> ${trip.date}</p>
          <p><a>Duration:</a> ${trip.duration} days</p>
          <p><a>Status:</a> ${trip.status}</p>
        </section>`
    });
  },

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
  },

  displayCostSpent(traveler) {
    let amountInDollars = traveler.amountSpent.toFixed(2)
    document.querySelector('.traveler-expenses-amount').innerText = `$${amountInDollars}`;
  },

  showInfoForm(){
    let infoForm = document.querySelector('.info-form');
    let plannerButton = document.querySelector('.planner-button');
      if (infoForm.style.display === "none") {
        infoForm.style.display = "block";
        plannerButton.innerText = "Hide Form";
      } else {
        infoForm.style.display = "none";
        plannerButton.innerText = "Plan My Next Trip";
      }
  },

  displayDestinationOptions(potentialDestinations, currentTraveler){
    let traveler;
    let bookTripButton;
    let destination = new Destination(potentialDestinations);
    let separateDestinations = potentialDestinations.forEach(place => {
      let destinationInfo = destination.getDestinationDetails(place.ID);
      let destinationID = place.id;
      let flightCost = place.estimatedFlightCostPerPerson;
      let lodgingCost = place.estimatedLodgingCostPerDay;
      let estimatedCostTrip = ((parseInt(travelersAmountInput.value)) * flightCost) + (lodgingCost * (parseInt(durationInput.value)));
      let estimatedCostFee = estimatedCostTrip * 0.10;
      let estimatedCost = estimatedCostFee + estimatedCostTrip;
      document.querySelector('.potential-trips').innerHTML +=
      `<section class='potential-trip'>
          <p class='destination-card-title'>${place.destination}</p>
          <p class='destination-card-info'>Estimated Cost: $${estimatedCost.toFixed(2)}</p>
          <img class='destination-image' src='${place.image}' alt='${place.alt}'>
          <button id='${place.id}' class='book-trip-button'>Book ${place.destination} Trip Now</button>
        </section>`;
    })
    bookTripButton = document.querySelectorAll('.book-trip-button');
    let activateBookTripButton = bookTripButton.forEach(button => {
      button.addEventListener('click', () => {fetchRequests.postData(currentTraveler, travelersAmountInput, durationInput, dateInput, button.id)
      });
    })
  }
}

export default domUpdates;
