import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    itemCodeableConcept: { embedded: 'always' },
    itemReference: { embedded: 'always' },
    amount: { embedded: 'always' }
  }
});