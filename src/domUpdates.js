import Traveler from './traveler.js'

let traveler;

let domUpdates = {

  displayTravelerGreeting() {
   travelerName = this.traveler.getFirstName();
   this.travelerGreeting.instertAdjacentHTML(`Welcome, ${travelerName}`);
   console.log(displayTravelerGreeting, 'displayTravelerGreeting is running')
   //document.querySelector()
 },


}

export default domUpdates;
