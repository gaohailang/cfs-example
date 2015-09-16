FS.debug = true; // enable CFS debug logging

// default GET request headers
FS.HTTP.setHeadersForGet([
  ['Cache-Control', 'public, max-age=31536000']
]);

// GET request headers for the "any" store
FS.HTTP.setHeadersForGet([
  ['foo', 'bar']
], 'any');


Stores = {};

Stores.images = new FS.Store.GridFS('images');
Stores.thumbs = new FS.Store.GridFS('thumbs', {
  beforeWrite: function(fileObj) {
    return {
      extension: 'png',
      type: 'image/png'
    };
  },
  transformWrite: function(fileObj, readStream, writeStream) {
    gm(readStream).resize(60).stream('PNG').pipe(writeStream);
  }
});