import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.modelFor('application').find(day => {
      return String(day.id) === String(params.day_id);
    });
  }
});
