export default Ember.Object.extend({
  open() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax( {
        dataType: 'json',
        method: 'GET',
        url: '/session/info',
        url: 'session/info',
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      }).then(function(user){
        return { currentUser: user };
      });
    })
  },
  fetch() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        dataType: 'json',
        method: 'GET',
        url: '/session/info',
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      }).then(function(user){
        console.log('Current', user);
        return { currentUser: user };
      });
    });
  },
  close() {
    Ember.Logger.debug('my-auth', 'Closing session');
    return new Ember.RSVP.Promise((resolve, reject) => Ember.$.ajax({
      dataType: 'json',
      method: 'POST',
      url: '/session/end',
      success: Ember.run.bind(null, resolve),
      error: Ember.run.bind(null, reject)
    }));
  }
});
