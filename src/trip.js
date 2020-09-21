class Trip {
 constructor(tripData) {
  this.tripData = tripData,
  this.id = tripData.id,
  this.userID = tripData.userID,
  this.destinationID = tripData.destinationID,
  this.travelers = tripData.travelers,
  this.date = tripData.date,
  this.duration = tripData.duration,
  this.status = tripData.status,
  this.suggestedActivities = []
 }

 findMyTrips(travelerID){
   let allTrips = this.tripData;
   let filteredTrips = allTrips.filter(eachTrip => {
     return eachTrip.userID === travelerID;
   })
   return filteredTrips;
 }

 findMyPendingTrips(travelerID){
   let allTrips = this.tripData;
   let filteredTrips = allTrips.filter(eachTrip => {
     return eachTrip.userID === travelerID && eachTrip.status === 'pending';
   })
   return filteredTrips;
 }

 findMyApprovedTrips(travelerID){
   let allTrips = this.tripData;
   let filteredTrips = allTrips.filter(eachTrip => {
     return eachTrip.userID === travelerID && eachTrip.status === 'approved';
   })
   return filteredTrips;
 }

}


export default Trip;
