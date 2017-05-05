import ResourceSerializer from 'ember-fhir/serializers/resource';

export default ResourceSerializer.extend({
  attrs: {
    text: { embedded: 'always' },
    contained: { embedded: 'always' },
    extension: { embedded: 'always' },
    modifierExtension: { embedded: 'always' }
  }
});