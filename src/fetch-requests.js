import createData from './index.js'
import domUpdates from './domUpdates.js'
import Trip from './trip.js'

let fetchRequests = {

  postData(traveler, travelersAmountInput, durationInput, dateInput, placeID) {
    console.log(traveler);
    let data = {
      id: Date.now(),
      userID: traveler.id,
      destinationID: parseInt(placeID),
      travelers: parseInt(travelersAmountInput.value),
      date: dateInput.value.replace(/-/g, '/'),
      duration: parseInt(durationInput.value),
      status: 'pending',
      suggestedActivities: [],
    };

    let dataToPost = JSON.stringify(data)

    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips', {
      method: 'POST',
      body: dataToPost,
      headers: {
        'Content-Type':'application/json'
      }})
      .then(response => response.json())
      .then(response => console.log(`Resource with id ${data.id} successfully posted, newResource: ${JSON.stringify(data)}`))
      .catch(err => console.log('There was an error posting this data.'));
  },

  getData() {
    return Promise.all([
      fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers'),
      fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips'),
      fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations')
    ])
  },

  getSpecificData(id) {
    fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/${+id}`)
      .then(response => response.json())
      .then(response => console.log(response))
  }
}

export default fetchRequests;
