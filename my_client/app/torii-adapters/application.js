export default Ember.Object.extend({
  open() {
    Ember.Logger.debug('torii-adapter', 'Opening session');
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
    Ember.Logger.debug('torii-adapter', 'Fetching session');
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        dataType: 'json',
        method: 'GET',
        url: '/session/info',
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      }).then(function(user){
        return { currentUser: user };
      });
    });
  },
  close() {
    Ember.Logger.debug('torii-adapter', 'Closing session');
    return new Ember.RSVP.Promise((resolve, reject) => Ember.$.ajax({
      dataType: 'json',
      method: 'POST',
      url: '/session/end',
      success: Ember.run.bind(null, resolve),
      error: Ember.run.bind(null, reject)
    }));
  }
});
