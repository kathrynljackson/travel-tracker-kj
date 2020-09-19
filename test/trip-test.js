import { expect } from 'chai';
import Trip from '../src/traveler.js';

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
        "date": "2019/09/16",
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
    ]

    tripData = sampleTripData;
    trip = new Trip(tripData);
  })

})
