import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    code: { embedded: 'always' },
    valueCodeableConcept: { embedded: 'always' },
    valueQuantity: { embedded: 'always' },
    valueRange: { embedded: 'always' },
    period: { embedded: 'always' }
  }
});