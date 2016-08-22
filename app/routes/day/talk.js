import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.modelFor('day').get('talks').find((talk) => {
      return talk.get('id') === params.talk_id;
    });
  }
});
