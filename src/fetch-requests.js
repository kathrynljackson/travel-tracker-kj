let fetchRequests = {
  getAllTravelerData() {
         fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers')
          .then(response => response.json())
          .then(data => {
            console.log('data',data)
          })
          .then(data => {
            id = data.id,
            name = data.name,
            travelerType = data.travelerType
          })
  }

 getTripData(){
}
