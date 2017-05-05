import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    category: { embedded: 'always' },
    description: { embedded: 'always' },
    priority: { embedded: 'always' },
    start: { embedded: 'always' },
    addresses: { embedded: 'always' },
    documentation: { embedded: 'always' },
    target: { embedded: 'always' }
  }
});