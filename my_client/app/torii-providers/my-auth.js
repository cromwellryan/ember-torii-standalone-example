// app/torii-providers/my-auth.js
export default Ember.Object.extend({
  // create a new authorization

  open: function(credentials) {
    Ember.Logger.debug('my-auth', 'Opening session');

    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax( {
        url: 'session/start',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ username: credentials.username, password: credentials.password }),
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      });
    });
  }
});
