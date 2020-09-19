import createData from './index.js'

let fetchRequests = {
  getTravelerData() {
    fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers')
      .then(response => response.json())
      .then(data => console.log(data))
      .then(travelers => createData.createTravelerData(travelers))
      .catch(err => console.log('ERROR IS OCCURING IN getTravelerData'))
 },

 getSingleTravelerData(id) {
   fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/${id}`)
     .then(response = response.json())
     .then(data => console.log(data))
     .then(data => createData.createSingleTravelerData(data))
     .catch(err => console.log('ERROR IS OCCURING IN getSingleTravelerData'))
 },

  getTripData() {
    fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips')
      .then(response => response.json())
      .then(data => console.log(data))
      .then(data => createData.createTripData(data))
      .catch(err => console.log('ERROR IS OCCURING IN getTripData'))
  },

  getDestinationData() {
    fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations')
    .then(response => response.json())
    .then(data => console.log(data))
    .then(data => createData.createDestinationData(data))
    .catch(err => console.log('ERROR IS OCCURING IN getDestinationData'))
  }
}

// import userStuff from './index.js';
//
// let fetcher = {
//  fetchUser(id) {
//     fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/${id}`)
//         .then(response => response.json())
//         .then(data => userStuff.setUserData(data))
//         .then(this.fetchTripsForAUser())
//         .catch(err => console.log('err', err))
// },
//
//  fetchTripsForAUser() {
//     fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips')
//         .then(response => response.json())
//         .then(data => userStuff.setUserTrips(data.trips))
//         // .then(data => console.log(data.trips.filter(trips => trips.userID === userData.id)))
//         .catch(err => console.log('err', err))
//     }
// }

// let userStuff = {
//       setUserData(fetchedUserData) {
//         userData = fetchedUserData
//     },
//     setUserTrips(fetchedTrips) {
//         //  console.log(fetchedTrips.trips)
//         userTrips = fetchedTrips.filter(fetchedTrip => fetchedTrip.userID === userData.id)
//      }
// }

export default fetchRequests;
