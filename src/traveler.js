class Traveler {
  constructor(travelerData) {
    this.travelerData = travelerData
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.travelerType = travelerData.travelerType;
    this.trips = [];
    this.amountSpent = 0;
  }

  getFirstName() {
    const travelerFullName = this.name.split(' ');
    return travelerFullName[0];
  }

  getTravelerData(id){
    const specificTraveler = this.travelerData.find(data => {
      return data.id === id;
    })
    return specificTraveler;
  }

}

export default Traveler;
