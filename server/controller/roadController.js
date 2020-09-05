const Road = require('../models/roadModel');
const dummyRoutes = require('./dummyRoutes');

exports.getSafestRoutes = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: {
      routes: dummyRoutes,
    },
  });
};
