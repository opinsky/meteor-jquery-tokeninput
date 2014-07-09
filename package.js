Package.describe({
  summary: "jquery-tokeninput packaged for Meteor"
});

Package.on_use(function(api, where) {
  api.use(['templating'], 'client');
  api.add_files(['lib/jquery.tokeninput.js'], 'client');
  api.add_files(['lib/token-input.css'], 'client');
  api.add_files(['lib/token-input-facebook.css'], 'client');
  api.add_files(['lib/token-input-facebook.css'], 'client');
});
