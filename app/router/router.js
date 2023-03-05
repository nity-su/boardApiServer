const parts = require("../controllers/db.controllers");
module.exports = (app) => {
  var router = require("express").Router();

  // Create a new part
  router.post("/", parts.create);

  // Retrieve all parts
  router.get("/", parts.findAll);

  // // Retrieve all published parts
  // router.get("/published", parts.findAllPublished);

  // // Retrieve a single part with id
  // router.get("/:id", parts.findOne);

  // // Update a part with id
  // router.put("/:id", parts.update);

  // // Delete a part with id
  // router.delete("/:id", parts.delete);

  // // Delete all parts
  // router.delete("/", parts.deleteAll);
  app.use("/api", router);
};
