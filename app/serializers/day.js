import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  attrs: {
    talks: { embedded: 'always' }
  }
});
