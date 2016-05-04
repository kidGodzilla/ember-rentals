export default function() {
  let rentals = [{
    type: 'rentals',
    id: 1,
    attributes: {
      title: 'Grand Old Mansion',
      owner: 'Veruca Salt',
      city: 'San Francisco',
      type: 'Estate',
      bedrooms: 15,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description: "The Grand Island Mansion is the perfect location to host your special occasion. This historic landmark is so large and has so many bedrooms you'll lose count!",
      address: "https://maps.googleapis.com/maps/api/staticmap?center=37.8530457,-123.2167343&zoom=6&size=150x150&markers=color:red%7C37.8530457,-123.2167343"
    }
  }, {
    type: 'rentals',
    id: 2,
    attributes: {
      title: 'Urban Living',
      owner: 'Mike Teavee',
      city: 'Seattle',
      type: 'Condo',
      bedrooms: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
      description: 'The Urban Living condo is the best of both worlds: Luxurious and affordable. This 1200 sq. ft. condo is in a great location, with all the best amenities. Call today!',
      address: "https://maps.googleapis.com/maps/api/staticmap?center=47.6147628,-122.4759893&zoom=6&size=150x150&markers=color:red%7C47.6147628,-122.4759893"
    }
  }, {
    type: 'rentals',
    id: 3,
    attributes: {
      title: 'Downtown Charm',
      owner: 'Violet Beauregarde',
      city: 'Portland',
      type: 'Apartment',
      bedrooms: 3,
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
      description: "This downtown Portland apartment isn't so bad! Sure, the location is terrible and the neighbors will hate you, but there's a lot to love about the rest of Oregon! Only a 2 hour drive to Eugene. Call today, we're ready to make a deal.",
      address: "https://maps.googleapis.com/maps/api/staticmap?center=45.5423508,-122.7945058&zoom=6&size=150x150&markers=color:red%7C45.5423508,-122.7945058"
    }
  }];

  this.get('/rentals', function(db, request) {
    if (request.queryParams.city) {
      let filteredRentals = rentals.filter(function(i) {
        return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
      });
      return { data: filteredRentals };
    } else {
      return { data: rentals };
    }
  });
  this.get('/rentals/:id', function(db, request) {
    if (request.params.id) {
      return { data: rentals[request.params.id - 1] };
    }
  });
}
