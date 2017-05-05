import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    quantity: { embedded: 'always' },
    substanceCodeableConcept: { embedded: 'always' },
    substanceReference: { embedded: 'always' }
  }
});