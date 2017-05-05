import ApplicationSerializer from 'ember-fhir/serializers/application';

export default ApplicationSerializer.extend({
  attrs: { extension: { embedded: 'always' }
  }
});