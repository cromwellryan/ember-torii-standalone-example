export default {
  name: 'cookie-injections-initializer',
  after: ['cookie'],
 
  initialize: function(container, app) {
    app.inject('controller', 'cookie', 'cookie:main');
  }
}
