import { expect } from 'chai';
import Destination from '../src/destination.js'

describe('Traveler', function() {
 let destination;
 let destinationData;

  beforeEach(() => {
    let sampleDestinations = [
      {
        "id": 1,
        "destination": "Lima, Peru",
        "estimatedLodgingCostPerDay": 70,
        "estimatedFlightCostPerPerson": 400,
        "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
        "alt": "overview of city buildings with a clear sky"
        },
        {
        "id": 2,
        "destination": "Stockholm, Sweden",
        "estimatedLodgingCostPerDay": 100,
        "estimatedFlightCostPerPerson": 780,
        "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "alt": "city with boats on the water during the day time"
        },
        {
        "id": 3,
        "destination": "Sydney, Austrailia",
        "estimatedLodgingCostPerDay": 130,
        "estimatedFlightCostPerPerson": 950,
        "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "alt": "opera house and city buildings on the water with boats"
        },
    ]
    destinationData = sampleDestinations;
    destination = new Destination(destinationData);
  })

  it('should be a function', () => {
    expect(Destination).to.be.a('function');
  })

  it('should be an instance of Destination', () => {
    expect(destination).to.be.an.instanceOf(Destination);
  })

  it('should take in the traveler\'s data as an argument', () => {
    destination = new Destination(destinationData[0]);
    expect(destination.destinationData).to.equal(destinationData[0]);
    expect(destination.id).to.equal(1);
    expect(destination.destination).to.equal("Lima, Peru");
    expect(destination.estimatedLodgingCostPerDay).to.equal(70);
    expect(destination.estimatedFlightCostPerPerson).to.equal(400);
    expect(destination.image).to.equal("https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"),
    expect(destination.alt).to.equal("overview of city buildings with a clear sky");
  })

});
