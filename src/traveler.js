class Traveler {
  constructor(travelerData) {
    this.travelerData = travelerData
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.travelerType = travelerData.travelerType;
    this.trips = [];
    this.amountSpent = 0;
  }
}

export default Traveler;
