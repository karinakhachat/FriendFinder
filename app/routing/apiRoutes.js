var friends = require("../data/friends");



app.get("/api/friends", function(req, res) {
    res.json(friends);
});

app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newPerson = req.body;
    

    console.log(newPerson);

        res.json(newReservation);
    console.log(newPerson)

});