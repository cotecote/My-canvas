// subscriptions - allow read access to collections 
Meteor.subscribe("drawings");
Meteor.subscribe("pointsCollection");

var canvas;

// we use these for drawing more interesting shapes
var lastX=0;
var lastY=0;
var strokeWidth = 1;
var thickness=1;
var strokeColor = "black"

var markPoint = function(event) {

  var offset = $('#canvas').offset();
  if (lastX==0) {// check that x was something not top-left. should probably set this to -1
        lastX = (event.pageX - offset.left);
        lastY = (event.pageY - offset.top);
      }
      Points.insert({
      x: (event.pageX - offset.left),
        y: (event.pageY - offset.top),
        x1: lastX,
        y1: lastY,
        w: thickness,
        c: strokeColor,
  });
   lastX = (event.pageX - offset.left);
   lastY = (event.pageY - offset.top);
}

////////Template helpers////////////
//////////////////////////////////

Template.navbar.helpers({
    // return a list of all visible documents
    drawings:function(){
      console.log("only my drawings");
      console.log(Meteor.userId());
      return Drawings.find({owner: Meteor.userId()});
    }
   }),


////////Template events////////////
//////////////////////////////////

Template.navbar.events({
  // load a drawing
  "click .js-load-draw":function(event){
      console.log(this);
      Session.set("drawid", this._id);
    },
  "click .js-load-button":function(event){
      console.log('loading draw');
      draw_id = $('#drawing').val()
      data = Drawings.findOne({_id: draw_id},{ fields: { draw: 1} })

      console.log(data['draw'])
      //data = Drawings.fetch(draw_with_id(draw_id))
      canvas = new Canvas();
      canvas.draw(data['draw']);
    }
  })



Template.wall.events({

    //Main buttons

  "click button.thicker": function () {

    thickness+=1;

  },

  "click button.thinner": function () {
    
    if (thickness > 0) {
      thickness-=1;
    }
  },

  "click button.clear": function (event) {
    Meteor.call('clear')
  },

  "click button.save": function (event) {
    console.log('hola or hello!!!')
    if (!Meteor.user()){// user not available
        alert("You need to login first!");
    }
    else {
      name = $('#drawing_name').val()
      Meteor.call('save', name);
    }
  },

  "click button.new": function(event){
    $('#drawing_name').val("")
    Meteor.call('clear')
    console.log("new drawing");
  },

   "click button.delete": function(event){
    draw_id= $('#drawing').val()
    Meteor.call('remove', draw_id);
  },

  //color palette.

  //Black color group

  "click button.black": function () {
    lastX=0;
    lastY=0;
    strokeColor = "black";
  },

  "click button.gray": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#808080";
  },

  "click button.darkgray": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#A9A9A9";
  },

  "click button.silver": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#C0C0C0";
  },

  "click button.lightgray": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#D3D3D3";
  },

  "click button.gainsboro": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#DCDCDC";
  },

  "click button.whitesmoke": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#F5F5F5";
  },

  "click button.white": function () {
    lastX=0;
    lastY=0;
    strokeColor = "white";
  },

  //Red color group

  "click button.darkmaroon": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#330000";
  },

  "click button.maroon": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#800000";
  },

  "click button.firebrick": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#B22222";
  },

  "click button.red": function () {
    lastX=0;
    lastY=0;
    strokeColor = "red";
  },

  "click button.orangered": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#FF4500";
  },

  "click button.coral": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#FF7F50";
  },

  "click button.lightsalmon": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#FFA07A";
  },

  "click button.antiquewhite": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#FAEBD7";
  },

  //Brown Orange group

  "click button.darkbrown": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#331900";
  },

  "click button.brown": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#663300";
  },

  "click button.lightbrown": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#994C00";
  },

  "click button.orangebrown": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#CC6600";
  },

  "click button.darkorange": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#FF8000";
  },

  "click button.orange": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#FF9933";
  },

  "click button.lightorange": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#FFB266";
  },

  "click button.whiteorange": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#FFCC99";
  },

  //Green Yellow group

  "click button.darkolive": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#333300";
  },

  "click button.mediumolive": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#666600";
  },

  "click button.olive": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#999900";
  },

  "click button.lime": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#CCCC00";
  },

  "click button.yellow": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#FFFF00";
  },

  "click button.mediumyellow": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#FFFF66";
  },

  "click button.lightyellow": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#FFFF99";
  },

  "click button.whiteyellow": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#FFFFCC";
  },

  //Green group

  "click button.darkgreen": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#193300";
  },

  "click button.mediumgreen": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#336600";
  },

  "click button.green": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#4C9900";
  },

  "click button.apple": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#66CC00";
  },

  "click button.limegreen": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#99FF33";
  },

  "click button.lightapple": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#B2FF66";
  },

  "click button.lightgreen": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#CCFF99";
  },
  
  "click button.whitegreen": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#E5FFCC";
  },

  //Blue Green group

   "click button.darkbluegreen": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#003319";
  },

   "click button.mediumbluegreen": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#066633";
  },

   "click button.bluegreen": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#00994C";
  },

   "click button.lightbluegreen": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#00CC66";
  },

   "click button.darkspringgreen": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#00FF80";
  },

   "click button.springgreen": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#66FF82";
  },

   "click button.lightspringgreen": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#99FFCC";
  },

   "click button.whitespringgreen": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#CCFFE5";
  },

  //Cyan group

   "click button.darkteal": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#003333";
  },

   "click button.mediumteal": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#006666";
  },

   "click button.teal": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#009999";
  },

   "click button.cyan": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#00CCCC";
  },

   "click button.aqua": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#00FFFF";
  },

   "click button.mediumaqua": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#66FFFF";
  },

   "click button.lightaqua": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#99FFFF";
  },

   "click button.whiteaqua": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#CCFFFF";
  },

  //Blue group

   "click button.darkblue": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#001933";
  },

   "click button.mediumblue": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#003366";
  },

  "click button.blue": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#004C99";
  },

   "click button.darksky": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#0080FF";
  },

   "click button.mediumsky": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#3394FF";
  },

   "click button.sky": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#66B2FF";
  },

   "click button.lightsky": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#99CCFF";
  },

   "click button.whitesky": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#CCE5FF";
  },

  //Violet group

   "click button.darkindigo": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#190033";
  },

   "click button.mediumindigo": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#330066";
  },

   "click button.indigo": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#6600CC";
  },

   "click button.lightindigo": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#7F00FF";
  },

   "click button.violet": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#9933FF";
  },

   "click button.mediumviolet": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#B266FF";
  },

   "click button.lightviolet": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#CC94FF";
  },

   "click button.whiteviolet": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#E5CCFF";
  },

  //Purple group

   "click button.darkpurple": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#330033";
  },

   "click button.mediumpurple": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#660066";
  },

   "click button.purple": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#990099";
  },

   "click button.lightpurple": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#CC00CC";
  },

   "click button.fucsia": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#FF33FF";
  },

   "click button.lightfucsia": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#FF99FF";
  },

   "click button.pink": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#FFC0CB";
  },

   "click button.lightpink": function () {
    lastX=0;
    lastY=0;
    strokeColor = "#FFCCFF";
  }
})

Template.canvas.events({
  'click': function (event) {
    markPoint(event);
  },
  'mousedown': function (event) {
    lastX=0;
    Session.set('draw', true);
  },
  'mouseup': function (event) {
    Session.set('draw', false);
    lastX=0;
    lasyY=0;
  },
  'mousemove': function (event) {
    if (Session.get('draw')) {
      markPoint(event);
    }
  }
});

