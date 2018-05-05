var friends = require("../data/friends");



app.get("/api/friends", function(req, res) {
    res.json(friends);
});

app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newPerson = req.body;
    for(i = 0; i < friends.length; i++){
        for (k = 0; k < friends[i].scores.length;i++){
            friends[i].scores[k] //find absolute value jquery google math object
            req.body.scores[k]
            function getSum(total, num) {
                return total + num;
            }
            function myFunction(item) {
                var sum = numbers.reduce(getSum);
            }
            //find absolute value jquery.
            //subtract absolute value make sure no negatives and update a variable
            //keeps track of total difference in variable counter++
            //once done iterating through for loop all the iterations get added 
            
        }

    }
   
    console.log(newPerson);

        res.json(newReservation);
    console.log(newPerson)

});