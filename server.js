const express = require("express");
const app = express();
var cors = require("cors");
const { sequelize } = require("./app/models/index");
const router = require("./app/router/router");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

router(app);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`connecting ${PORT}...`);
});

// let myDate = new Date(); // create a new Date object with the current date and time
// let mysqlDateString = myDate.toISOString().slice(0, 19).replace("T", " ");
