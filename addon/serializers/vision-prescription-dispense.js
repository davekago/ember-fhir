import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    product: { embedded: 'always' },
    duration: { embedded: 'always' },
    note: { embedded: 'always' }
  }
});