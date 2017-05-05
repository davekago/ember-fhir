import ElementSerializer from 'ember-fhir/serializers/element';

export default ElementSerializer.extend({
  attrs: {
    additionalInstruction: { embedded: 'always' },
    timing: { embedded: 'always' },
    asNeededCodeableConcept: { embedded: 'always' },
    site: { embedded: 'always' },
    route: { embedded: 'always' },
    method: { embedded: 'always' },
    doseRange: { embedded: 'always' },
    doseSimpleQuantity: { embedded: 'always' },
    maxDosePerPeriod: { embedded: 'always' },
    maxDosePerAdministration: { embedded: 'always' },
    maxDosePerLifetime: { embedded: 'always' },
    rateRatio: { embedded: 'always' },
    rateRange: { embedded: 'always' },
    rateSimpleQuantity: { embedded: 'always' }
  }
});