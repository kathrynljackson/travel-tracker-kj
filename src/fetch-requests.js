import createData from './index.js'
import domUpdates from './domUpdates.js'

let fetchRequests = {
  postData(traveler, travelersAmountInput, durationInput, dateInput) {

    let data = {
      id: Date.now(),
      userID: traveler.id,
      travelers: travelersAmountInput.value,
      date: new Date(dateInput.value),
      duration: durationInput.value,
      status: 'pending',
      suggestedActivities: [],
      }

    fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type':'application/json'
      }})
      .then(response => response.json())
      .then(response => console.log('Resource with id '+data.id+' successfully posted, newResource: '+data))
      .then(response => console.log(data))
      .catch(err => console.log('There was an error posting this data.'))
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
