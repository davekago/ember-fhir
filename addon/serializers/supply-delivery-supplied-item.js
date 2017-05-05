import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    quantity: { embedded: 'always' },
    itemCodeableConcept: { embedded: 'always' },
    itemReference: { embedded: 'always' }
  }
});