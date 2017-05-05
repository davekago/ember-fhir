import ResourceSerializer from 'ember-fhir/serializers/resource';

export default ResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    link: { embedded: 'always' },
    entry: { embedded: 'always' },
    signature: { embedded: 'always' }
  }
});