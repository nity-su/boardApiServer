const db = require("../models/index");
const Board = db.board;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = async (req, res) => {
  console.log(req.body.time);
  Board.create({
    title: req.body.title,
    time: req.body.time,
    user_id: req.body.user_id,
  })
    .then((user) => res.send(user))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the column.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Board.findAll()
    .then((user) => res.send(user))
    .catch((err) =>
      res
        .status(500)
        .send({ message: err.message | "some error occurred while processing" })
    );
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};
