Meteor.startup( function() {
  canvas = new Canvas();

  Deps.autorun( function() {
    var data = Points.find({}).fetch();

    if (canvas) {
      canvas.draw(data);
    }

    //if (!Drawings.findOne()){// no documents yet!
    //  Drawings.insert({title:"my new drawing"});
    //}
  });
});
