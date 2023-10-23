const Flight = require('../models/flight');

const Ticket = require('../models/tickets')

module.exports = {
    index,
    new: addFlight,
    create
  };

  async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { flights });
  }
  function addFlight(req, res) {
    // We'll want to be able to render an  
    // errorMsg if the create action fails
    res.render('flights/new', { errorMsg: '' });
  }
  async function create(req, res) {
    console.log(req.body)
    // convert nowShowing's checkbox of nothing or "on" to boolean
    req.body.Flight = !!req.body.Flight;
    // remove any whitespace at start and end of cast
    req.body.airline = req.body.airline.trim();
    // split cast into an array if it's not an empty string - using a regular expression as a separator
    if (req.body.airline) req.body.airline = req.body.airline.split(/\s*,\s*/);
    // Remove empty properties so that defaults will be applied
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    console.log(req.body);
    req.body.airline =req.body.airline [0]
    req.body.flightNo = Number(req.body.flightNo) 
    try {
      await Flight.create(req.body);
      // Always redirect after CUDing data
      // We'll refactor to redirect to the movies index after we implement it
      res.redirect('/flights');  // Update this line
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('flights/new', { errorMsg: err.message });
    }
  }
  async function show(req,res){
     Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) }}
