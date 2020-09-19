class Destination {
  constructor(destinationData) {
    this.id = destinationData.id,
    this.estimatedLodgingCostPerDay = destinationData.estimatedLodgingCostPerDay,
    this.estimatedFlightCostPerPerson = destinationData.estimatedFlightCostPerPerson,
    this.image = destinationData.image,
  }
}

export default Destination;
