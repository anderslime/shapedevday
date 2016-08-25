import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return new Ember.RSVP.Promise((resolve) => {
      let day = this.modelFor('application').find(day => {
        return String(day.id) === String(params.day_id);
      });
      setTimeout(() => {
        resolve(day);
      }, 1000);
    });
  }
});
