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
    description: req.body.description,
  })
    .then((user) => res.send(user))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the column.",
      });
    });

  // Board.count().then(console.log);
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const skip = 5 * req.query.start;

  Promise.all([Board.findAll({ offset: skip, limit: 5 }), Board.count()])
    .then((values) => res.send(values))
    .catch((err) =>
      res.status(500).send({
        message: err.message | "some error occurred while processing",
      })
    );
};

exports.findByLimit = (req, res) => {};

exports.update = (req, res) => {};

exports.delete = (req, res) => {};

exports.deleteAll = (req, res) => {};

exports.findAllPublished = (req, res) => {};
