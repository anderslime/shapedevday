import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  attrs: {
    developers: { embedded: 'always' }
  }
});
