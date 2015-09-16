Router.configure({
  notFoundTemplate: 'not_found',
  loadingTemplate: 'loading',
  layoutTemplate: 'layout'
});

Router.onBeforeAction('loading');

Router.map(function() {
  this.route('home', {
    path: '/'
  });

  this.route('images');
});

if (Meteor.isClient) {
  // define retouer related helper
  // absoluteUrl, currentRouteIs, activeRoute
}