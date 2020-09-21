class Destination {
  constructor(destinationData) {
    this.destinationData = destinationData,
    this.id = destinationData.id,
    this.destination = destinationData.destination,
    this.estimatedLodgingCostPerDay = destinationData.estimatedLodgingCostPerDay,
    this.estimatedFlightCostPerPerson = destinationData.estimatedFlightCostPerPerson,
    this.image = destinationData.image,
    this.alt = destinationData.alt
  }

  getDestinationDetails(id) {
    let allDestinations = this.destinationData;
    let filteredDestinations = allDestinations.find(destination => {
      return destination.id === id;
    })
    return filteredDestinations;
  }

  calculateCost(destination) {
    let sum = destination.estimatedLodgingCostPerDay + destination.estimatedFlightCostPerPerson;
    let travelAgentFee = sum * 0.10;
    let total = sum + travelAgentFee;
    return total;
  }

};

export default Destination;
