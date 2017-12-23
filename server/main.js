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
	},
  'remove': function (draw_id) {
    console.log("I'll kill ya");
    Drawings.remove({_id: draw_id});
  },

});