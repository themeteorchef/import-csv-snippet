Meteor.publish( 'sales', function() {
  return Sales.find();
});
