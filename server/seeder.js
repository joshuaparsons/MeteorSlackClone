Meteor.startup(function() {

  Meteor.users.remove({});
  Accounts.createUser({
    username: "scotchio",
    email: "scotch@example.com",
    password: "dummypassword"
  });

  Factory.define('message', Messages, {
    text: function() {
    	return Fake.sentence();
    },
    user: Meteor.users.findOne()._id,
    timestamp: Date.now(),
    channel: 'general'
  });

  Messages.remove({});

  if (Messages.find({}).count() === 0) {
    _(10).times(function(n) {
      Factory.create('message');
    });
  }


  Channels.remove({});

//Josh: Insert channels in the left sidebar
  Channels.insert({
    name: "Wellness"
  });
  Channels.insert({
    name: "Coursework"
  });
  Channels.insert({
    name: "Random"
  });
});