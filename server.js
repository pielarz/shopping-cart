// NODE EXPRESS MONGODB SERVER

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

//Run express as a function
const app = express();
//Use body-parser
app.use(bodyParser.json());
//Initialize mongoDB and connect to it
mongoose.connect("mongodb://localhost/react-shopping-cart-db", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//Define Vehicle model
const Vehicle = mongoose.model(
  "vehicles",
  new mongoose.Schema({
    id: { type: String, default: shortid.generate },
    image: String,
    title: String,
    description: String,
    price: Number,
    model: String,
  })
);

//Define first endpoint
app.get("/api/vehicles", async (req, res) => {
  //Get list of vehicles from db. 'Find' is a promise.
  const vehicles = await Vehicle.find({});
  //Send back to client
  res.send(vehicles);
});

//Endpoint to create a Vehicle
app.post("/api/vehicles", async (req, res) => {
  const newVehicle = new Vehicle(req.body);
  const savedVehicle = await newVehicle.save();
  res.send(savedVehicle);
});

app.delete("/api/vehicles/:id", async (req, res) => {
  const deletedVehicle = await Vehicle.findByIdAndDelete(req.params.id);
  res.send(deletedVehicle);
});

//Listen to a port and launch a server

//Define a port
const port = process.env.PORT || 3001;
//Listen..
app.listen(port, () => console.log("Listening at http://localhost:3001"));
