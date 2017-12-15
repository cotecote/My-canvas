 // publish a list of documents the user can see
Meteor.publish("drawings", function(){
  return Drawings.find({owner:this.userId});
}) 
Meteor.publish("pointsCollection", function(){
  return Points.find({owner:this.userId});
}) 


//////////Meteor methods//////////////
//////////////////////////////////////

Meteor.methods({
  'save': function (name) {
  	console.log('hi everyone');
  	currentDraw = Points.find({}).fetch();
  	console.log(currentDraw)
  	Drawings.insert({owner:this.userId, name: name ,draw: currentDraw, time_stamp: new Date()});
  	console.log(Drawings.find({}).fetch());
  },
  'clear': function () {
    Points.remove({});
	}
});