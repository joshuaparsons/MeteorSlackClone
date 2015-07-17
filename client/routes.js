Router.configure({
  layoutTemplate: 'app'
});

// Josh:
//Router.route('/post/:post', function() {
//	Session.set('post', this.params.post);
//	this.render('comments');
//});

Router.route('/post/:post', function() {
	Session.set('post', this.params.post);
	this.render('comments');
});

Router.route('/channel/:channel', function () {
	Session.set('channel', this.params.channel);
	this.render('messages');
});


// Josh: Route the user to the wellness channel upon startup
Router.route('/', function () {
	this.redirect('/channel/wellness');
});