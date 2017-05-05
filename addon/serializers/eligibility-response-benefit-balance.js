import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    category: { embedded: 'always' },
    subCategory: { embedded: 'always' },
    network: { embedded: 'always' },
    unit: { embedded: 'always' },
    term: { embedded: 'always' },
    financial: { embedded: 'always' }
  }
});