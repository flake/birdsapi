Meteor.methods({
  addBird: function(bird){
    var birdId = Birds.insert(bird);
    return Birds.findOne(birdId);
  },
  allBirds: function(){
    return Birds.find();
  },
  getBird: function(birdId){
    return Birds.findOne(birdId);
  },
  deleteBird: function(birdId){
    return Birds.remove(birdId);
  }
});
