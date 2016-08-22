import DS from 'ember-data';

export default DS.Model.extend({
  talks: DS.hasMany('talk', { async: false })
});
