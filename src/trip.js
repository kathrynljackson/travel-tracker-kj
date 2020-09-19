class Trip {
 constructor(tripData) {
  this.tripData = tripData,
  this.id = tripData.id,
  this.destinationID = tripData.destinationID,
  this.travelers = tripData.travelers,
  this.date = tripData.date,
  this.duration = tripData.duration,
  this.status = tripData.status,
  this.suggestedActivities = []
 }
}

export default Trip;
