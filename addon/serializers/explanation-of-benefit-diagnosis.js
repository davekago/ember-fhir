import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    diagnosisCodeableConcept: { embedded: 'always' },
    diagnosisReference: { embedded: 'always' },
    type_: { embedded: 'always' },
    packageCode: { embedded: 'always' }
  }
});