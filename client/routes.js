Router.configure({
  layoutTemplate: 'Application'
});

Router.route('/', function () {
 this.render("navbar", {to:"navbar"});
});

Router.route('/drawings/:_id', function () {
	console.log("you hit /drawins  "+this.params._id);
    data = Drawings.findOne({_id: this.params._id},{ fields: { draw: 1, name: 1} })
    $("#drawing_id").val(data['_id']) 
    canvas.clear();
    $('#drawing_name').val(data['name'])
    canvas.draw(data['draw']);
});

Router.route('/documents/:_id', function () {
  console.log("you hit /documents  "+this.params._id);
  Session.set("docid", this.params._id);
  this.render("navbar", {to:"header"});
  this.render("docItem", {to:"main"});  
});
       