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

exports.getSafestRoutes = async (req, res, next) => {
  const startAdd = req.body.startAdd;
  const destAdd = req.body.destAdd;

  console.log(startAdd, destAdd);

  const startLoc = await getCoordinates(startAdd);
  const destLoc = await getCoordinates(destAdd);

  console.log(startLoc, destLoc);

  res.status(200).json({
    status: 'success',
    data: {
      routes: dummyRoutes,
    },
  });
};
