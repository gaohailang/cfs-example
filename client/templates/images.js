
Meteor.startup(function() {
  Template.images.events({
    'dropped .imageArea': getHandler(true),
    'dropped .imageDropArea': getHandler(true),
    'change input.images': getHandler(false)
  });
});

Template.images.helpers({
  uploadedImages: function() {
    return Collections.Images.find();
  }
});

function getHandler(dropped) {
  return FS.EventHandlers.insertFiles(Collections.Images, {
    metadata: function(fileObj) {
      return {
        owner: Meteor.userId()
      };
    },
    after: function(error, fileObj) {
      if(!error) {
        console.log('INserted', fileObj.name());
      }
    }
  })
}