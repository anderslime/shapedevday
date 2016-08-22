import DS from 'ember-data';

export default DS.Model.extend({
  login: DS.attr(),
  name: DS.attr(),
  github: DS.attr(),
  imageUrl: DS.attr()
});
