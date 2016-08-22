import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('day', { path: '/day/:day_id' }, function() {
    this.route('talk',  { path: '/talks/:talk_id' });
  });
  this.route('index', { path: '/' });
});

export default Router;
