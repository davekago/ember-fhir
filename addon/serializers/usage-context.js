import ElementSerializer from 'ember-fhir/serializers/element';

export default ElementSerializer.extend({
  attrs: {
    code: { embedded: 'always' },
    valueCodeableConcept: { embedded: 'always' },
    valueQuantity: { embedded: 'always' },
    valueRange: { embedded: 'always' }
  }
});