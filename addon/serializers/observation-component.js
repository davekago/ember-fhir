import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    code: { embedded: 'always' },
    valueQuantity: { embedded: 'always' },
    valueCodeableConcept: { embedded: 'always' },
    valueRange: { embedded: 'always' },
    valueRatio: { embedded: 'always' },
    valueSampledData: { embedded: 'always' },
    valueAttachment: { embedded: 'always' },
    valuePeriod: { embedded: 'always' },
    dataAbsentReason: { embedded: 'always' },
    interpretation: { embedded: 'always' },
    referenceRange: { embedded: 'always' }
  }
});