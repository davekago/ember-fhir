import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    outcomeCodeableConcept: { embedded: 'always' },
    outcomeReference: { embedded: 'always' },
    progress: { embedded: 'always' },
    reference: { embedded: 'always' },
    detail: { embedded: 'always' }
  }
});