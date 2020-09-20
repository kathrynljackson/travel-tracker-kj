import Traveler from './traveler.js';
import traveler from './index.js';
import travelerGreeting from './index.js';



let domUpdates = {

  displayTravelerGreeting(travelerName) {
    document.querySelector('.traveler-dashboard-greeting').innerText = 'Welcome, '+travelerName+'!';
    console.log('displayTravelerGreeting is running');
 },

  displayAllTrips(travelerTrips) {
    document.querySelector('.upcoming-trips-info').innerHTML = travelerTrips+'\n';
    console.log('displayAllTrips is running');
  },
}

export default domUpdates;
