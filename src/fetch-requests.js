import createData from './index.js'

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
