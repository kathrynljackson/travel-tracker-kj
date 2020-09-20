import { expect } from 'chai';
import Traveler from '../src/traveler.js'

describe('Traveler', function() {
 let traveler;
 let travelerData;


  beforeEach(() => {
    let sampleTravelers = [
      {
        "id": 1,
        "name": "Ham Leadbeater",
        "travelerType": "relaxer"
        },
        {
        "id": 2,
        "name": "Rachael Vaughten",
        "travelerType": "thrill-seeker"
        },
        {
        "id": 3,
        "name": "Sibby Dawidowitsch",
        "travelerType": "shopper"
        },
        {
        "id": 4,
        "name": "Leila Thebeaud",
        "travelerType": "photographer"
        },
        {
        "id": 5,
        "name": "Tiffy Grout",
        "travelerType": "thrill-seeker"
        }
    ];

    travelerData = sampleTravelers;
    traveler = new Traveler(travelerData);
  })

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  })

  it('should be an instance of Traveler', () => {
    expect(traveler).to.be.an.instanceOf(Traveler);
  })

  it('should take in the traveler\'s data as an argument', () => {
    traveler = new Traveler(travelerData[0]);

    expect(traveler.travelerData).to.equal(travelerData[0]);
    expect(traveler.id).to.equal(1);
    expect(traveler.name).to.equal("Ham Leadbeater");
    expect(traveler.travelerType).to.equal("relaxer");
  })

  it('should return the user\'s first name', () => {
    traveler = new Traveler(travelerData[1]);
    let firstName = traveler.getFirstName();

    traveler.getFirstName();
    expect(firstName).to.equal('Rachael');
  })
})
