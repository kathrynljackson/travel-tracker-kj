import createData from './index.js'

// let fetchRequests = {
//   getTravelerData() {
//     fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         const pleaseGetTravelerData = data.map(traveler => {
//           return traveler;
//         })
//       })
//       .then(traveler => createData.createTravelerData(traveler))
//       .catch(err => console.log('ERROR IS OCCURING IN getTravelerData'))
//  },
//
//  getSingleTravelerData(id) {
//    fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/${id}`)
//      .then(response = response.json())
//      .then(data => console.log(data))
//      .then(data => createData.createSingleTravelerData(data))
//      .catch(err => console.log('ERROR IS OCCURING IN getSingleTravelerData'))
//  },
//
//   getTripData() {
//     fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips')
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .then(data => createData.createTripData(data))
//       .catch(err => console.log('ERROR IS OCCURING IN getTripData'))
//   },
//
//   getDestinationData() {
//     fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .then(data => createData.createDestinationData(data))
//     .catch(err => console.log('ERROR IS OCCURING IN getDestinationData'))
//   }
// }

let fetchRequests = {
  getData() {
    return Promise.all([
      fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers'),
      fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips'),
      fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations')
  ])
  }
}

export default fetchRequests;
