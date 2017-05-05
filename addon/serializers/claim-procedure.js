import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    procedureCodeableConcept: { embedded: 'always' },
    procedureReference: { embedded: 'always' }
  }
});