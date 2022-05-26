const Station = require('../model/station');

exports.createStation = (req, res) => {
  if (!req.body) {
    res.status(500).send({ message: 'Error!' });
  } else {
    Station.create(req.body)
      .then(station => res.send(station))
      .catch(err => res.status(500).send(err.message));
  }
};

exports.readStation = (req, res) => {
  Station.find()
    .then(station => {
      res.send(station);
    })
    .catch(error => {
      res.status(500).send({ message: error.message || "Can't find stations." });
    });
};

exports.readStationById = (req, res) => {
  const id = req.params.id;

  Station.findById(id)
    .then(station => {
      res.send(station);
    })
    .catch(error => {
      res.status(500).send({ message: error.message || "Can't find station." });
    });
};

exports.deleteStation = (req, res) => {
  const id = req.params.id;

  Station.findByIdAndDelete(id)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: `Cannot delete weather station with ID ${id}. Maybe something is wrong.` });
      } else {
        res.send({
          message: 'Station successfully deleted!'
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err + ', Cannot delete issue with id: ' + id
      });
    });
};
