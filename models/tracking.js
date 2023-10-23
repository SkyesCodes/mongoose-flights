const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackingSchema = new Schema ({
    airport: {
        type: String,
        required: true,
        enum: ['AUS','DFW','DEN','LAX','SAN']
    },
    arrival: {type: Date}
})
Ticket.findById(req.params.id)
.populate('flight')
.exec(function(err, ticket);

module.exports = mongoose.model('Tracking', trackingSchema);