import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login(username, password) {
      let credentials = { username, password }
      this.get('session').open('my-auth', credentials).then(() => {
        this.transitionTo('protected.c');
      });
    },

    logout() {
      this.get('session').close().then(() => {
        this.transitionTo('a');
      });
    },

    accessDenied() {
      this.transitionTo('b');
    }
  }
});
