Meteor.publish("documents", function(){
  return Drawings.find({owner:this.userId});
}) 
Meteor.publish("points", function(){
  return Points.find({owner:this.userId});
}) 

Meteor.methods({
  'save': function () {
  	console.log('chupalo rico');
  	currentDraw = Points.find({}).fetch();
  	console.log(currentDraw)
  	Drawings.insert({owner:this.userId, draw: currentDraw, time_stamp: new Date()});
  	console.log(Drawings.find({}).fetch());
  },
  'clear': function () {
    Points.remove({});
	}
});