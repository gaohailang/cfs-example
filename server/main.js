Meteor.startup(function() {
  console.log("images uploaded", Collections.Images.find().count());

  Collections.Images.on('removed', function(fileObj) {
    console.log('Removed '+fileObj._id + " from images collection.");
  });
});

Meteor.methods({
  // test url insert
});

Meteor.publish("images", function() {
  return Collections.Images.find();
});


/* security */
function trueFunc(userId) {
  if (!userId) {
    // must be logged in
    return false;
  }

  return true;
}

Collections.Images.allow({
  insert: trueFunc,
  update: trueFunc,
  remove: trueFunc,
  download: trueFunc
});


