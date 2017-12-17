Meteor.startup( function() {
  canvas = new Canvas();

  Deps.autorun( function() {
    var data = Points.find({}).fetch();

    if (canvas) {
      canvas.draw(data);
    }

      console.log('inside meteor autorun');
    if(Meteor.userId()){
      console.log('Meteor Logged');
     $("#btn_load").removeClass("hide-element");
     console.log('Meteor show load button');
     $("#drawing").removeClass("hide-element");
     console.log('Meteor show select');
  }else {
    console.log('Meteor Not Logged');
    $("#btn_load").addClass("hide-element");
    console.log('Meteor hide load button');
    $("#drawing").addClass("hide-element");
    console.log('Meteor hide select');
  }

  });

  
});