import { expect } from 'chai';
import Trip from '../src/trip.js';

describe('Trip', function() {
let trip;
let tripData;

  beforeEach(() => {
    let sampleTripData = [
      {
        "id": 1,
        "userID": 44,
        "destinationID": 49,
        "travelers": 1,
        "date": "2020/09/16",
        "duration": 8,
        "status": "approved",
        "suggestedActivities": []
        },
        {
        "id": 2,
        "userID": 35,
        "destinationID": 25,
        "travelers": 5,
        "date": "2020/10/04",
        "duration": 18,
        "status": "pending",
        "suggestedActivities": []
        },
        {
        "id": 3,
        "userID": 3,
        "destinationID": 22,
        "travelers": 4,
        "date": "2020/05/22",
        "duration": 17,
        "status": "pending",
        "suggestedActivities": []
        },
        {
        "id": 4,
        "userID": 3,
        "destinationID": 22,
        "travelers": 4,
        "date": "2020/05/22",
        "duration": 17,
        "status": "approved",
        "suggestedActivities": []
        },
    ]

    tripData = sampleTripData;
    trip = new Trip(tripData);
  })

  it('should be a function', () => {
    expect(Trip).to.be.a('function');
  })

  it('should be an instance of Trip', () => {
    expect(trip).to.be.an.instanceOf(Trip);
  })

  it('should take in the traveler\'s data as an argument', () => {
    trip = new Trip(tripData[0]);
    expect(trip.tripData).to.equal(tripData[0]);
    expect(trip.id).to.equal(1);
    expect(trip.userID).to.equal(44);
    expect(trip.destinationID).to.equal(49);
    expect(trip.travelers).to.equal(1);
    expect(trip.date).to.equal("2020/09/16");
    expect(trip.duration).to.equal(8)
    expect(trip.status).to.equal("approved");
    expect(trip.suggestedActivities).to.deep.equal([]);
  })

  it('should find each traveler\'s trips', () => {
    trip.findMyTrips(44);
    expect(trip.findMyTrips(44)).to.deep.equal([tripData[0]]);
  })

  it('should find pending trips', () => {
    trip.findMyPendingTrips(3);
    expect(trip.findMyPendingTrips(3)).to.deep.equal([tripData[2]])
  })

  it('should find approved trips', () => {
    trip.findMyApprovedTrips(3);
    expect(trip.findMyApprovedTrips(3)).to.deep.equal([tripData[3]])
  })
})
