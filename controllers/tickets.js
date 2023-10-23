async function newTicket(req, res){
    res.render('ticket/new', {title: 'Add Ticket',
ticketId: req.params.id})
}
async function create (req, res) {
    try{
        req.body.flight = req.params.id
        await Ticket.create(req,res)
    } catch (err) {
        console.log(err)
    }
}
res.redirect(`/flights/${req.params.id}`)