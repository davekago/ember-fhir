import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    security: { embedded: 'always' },
    resource: { embedded: 'always' },
    interaction: { embedded: 'always' },
    searchParam: { embedded: 'always' },
    operation: { embedded: 'always' }
  }
});