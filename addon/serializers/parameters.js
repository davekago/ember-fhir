import ResourceSerializer from 'ember-fhir/serializers/resource';

export default ResourceSerializer.extend({
  attrs: {parameter: { embedded: 'always' }
  }
});