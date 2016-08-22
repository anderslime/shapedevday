import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  day: DS.attr('number'),
  developers: DS.hasMany('developer', { async: false }),

  isOnDay(dayId) {
    return String(this.get('day')) === String(dayId);
  }
});
