Meteor.methods({
  addBird: function(bird){
    var birdId = Birds.insert(bird);
    return Birds.findOne(birdId);
  }
});
