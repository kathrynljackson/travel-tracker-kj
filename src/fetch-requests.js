import createData from './index.js'
import domUpdates from './domUpdates.js'
import Trip from './trip.js'

let fetchRequests = {
  postData(traveler, travelersAmountInput, durationInput, dateInput) {

    let data = {
      id: Date.now(),
      userID: traveler.id,
      travelers: parseInt(travelersAmountInput.value),
      date: dateInput.value,
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
      .then(response => console.log('This is the data', data))
      .then(response => console.log(`Resource with id ${data.id} successfully posted, newResource: ${JSON.stringify(data)}`))
      .catch(err => console.log('There was an error posting this data.'));
  },

  getData() {
    return Promise.all([
      fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers'),
      fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips'),
      fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations')
  ])
  }
}

export default fetchRequests;
