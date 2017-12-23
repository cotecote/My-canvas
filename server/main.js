//////////Meteor methods//////////////
//////////////////////////////////////

Meteor.methods({
  'save': function (name, draw_id) {
  	console.log('hi everyone');
  	currentDraw = Points.find({}).fetch();
    if (draw_id){
      console.log("Actualizando")
      Drawings.update({_id: draw_id}, {owner:this.userId, name: name, draw: currentDraw, time_stamp: new Date()});
    }
    else {
      Drawings.insert({owner:this.userId, name: name, draw: currentDraw, time_stamp: new Date()});
    }
  	
  },
  'clear': function () {
    Points.remove({});
	},
  'remove': function (draw_id) {
    console.log("I'll kill ya");
    Drawings.remove({_id: draw_id});
  },

});