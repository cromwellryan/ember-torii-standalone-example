import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  model() {
    return {
      fn: Ember.computed.alias('session.isAuthenticated')
    }
  }
});
