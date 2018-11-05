const locationToNearQuery = (location, minDistance, maxDistance) => {
  const { lat, lng } = location;

  const locationArray = [lng, lat];

  const locationQuery = {
    query: {
      near: {
        geometry: { type: 'Point', coordinates: locationArray },
      },
    },
  };

  if (minDistance) {
    locationQuery.query.near.minDistance = minDistance;
  }
  if (maxDistance) {
    locationQuery.query.near.maxDistance = maxDistance;
  }

  return locationQuery;
};

const locationToGeoPoint = location => ({
  type: 'Point',
  coordinates: [location.lng, location.lat],
});

const getLocationFromNearQuery = (nearQuery) => {
  const { coordinates } = nearQuery;
  const location = {
    lng: coordinates[0],
    lat: coordinates[1],
  };

  return location;
};

module.exports = { getLocationFromNearQuery, locationToNearQuery, locationToGeoPoint };
