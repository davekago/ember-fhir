import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    category: { embedded: 'always' },
    definition: { embedded: 'always' },
    code: { embedded: 'always' },
    reasonCode: { embedded: 'always' },
    reasonReference: { embedded: 'always' },
    goal: { embedded: 'always' },
    scheduledTiming: { embedded: 'always' },
    scheduledPeriod: { embedded: 'always' },
    location: { embedded: 'always' },
    performer: { embedded: 'always' },
    productCodeableConcept: { embedded: 'always' },
    productReference: { embedded: 'always' },
    dailyAmount: { embedded: 'always' },
    quantity: { embedded: 'always' }
  }
});