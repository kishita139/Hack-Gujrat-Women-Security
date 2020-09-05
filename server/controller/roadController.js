const axios = require('axios');

const Road = require('../models/roadModel');
const dummyRoutes = require('./dummyRoutes');

const getCoordinates = async (address) => {
  const addressUrl = encodeURIComponent(address);
  const geoRes = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${addressUrl}&key=${process.env.GOOGLE_MAPS_API}`
  );

  const location = geoRes.data.results[0].geometry.location;
  return location;
};

// long,lat
const getRoutes = async (start, end) => {
  try {
    const directionsRes = await axios.get(
      `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&alternatives=true&geometries=geojson&access_token=${process.env.MAPBOX_TOKEN}`
    );
    // console.log(directionsRes.data.routes);
    // console.log(directionsRes.data.routes[0].geometry.coordinates.length);
    return directionsRes.data.routes;
  } catch (err) {
    console.log(err);
  }
};

const getRoads = async (routes) => {
  const roadsInRoutes = [];
  routes.forEach((route) => {
    const road = [];
    const steps = route.legs[0].steps;

    steps.forEach((step) => {
      const found = road.some((ele) => ele.name === step.name);
      if (step.name && step.name !== '' && !found)
        road.push({ name: step.name, loc: step.maneuver.location });
      //   console.log(step.name);
    });

    roadsInRoutes.push(road);
  });

  return roadsInRoutes;
};

exports.getSafestRoutes = async (req, res, next) => {
  // convert addresses to coords
  const startAdd = req.body.startAdd;
  const destAdd = req.body.destAdd;

  // console.log(startAdd, destAdd);

  const startLoc = await getCoordinates(startAdd);
  const destLoc = await getCoordinates(destAdd);

  // console.log(startLoc, destLoc);

  // get all the routes from start to dest
  const routes = await getRoutes(
    [startLoc.lng, startLoc.lat],
    [destLoc.lng, destLoc.lat]
  );

  // console.log(routes);

  // get roads in each route
  const roadsInRoutes = await getRoads(routes);
  console.dir(roadsInRoutes, { depth: null });

  // filter roads not present in DB
  // const filteredRoads =

  res.status(200).json({
    status: 'success',
    data: {
      routes: dummyRoutes,
      // routes: routes,
    },
  });
};
