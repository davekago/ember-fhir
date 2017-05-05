import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    measure: { embedded: 'always' },
    detailQuantity: { embedded: 'always' },
    detailRange: { embedded: 'always' },
    detailCodeableConcept: { embedded: 'always' },
    dueDuration: { embedded: 'always' }
  }
});