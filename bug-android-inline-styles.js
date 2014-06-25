if (Meteor.isClient) {
  Template.hello.color = function () {
    return "red";
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
