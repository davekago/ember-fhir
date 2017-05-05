import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    definition: { embedded: 'always' },
    partOf: { embedded: 'always' },
    category: { embedded: 'always' },
    medicationCodeableConcept: { embedded: 'always' },
    medicationReference: { embedded: 'always' },
    subject: { embedded: 'always' },
    context: { embedded: 'always' },
    supportingInformation: { embedded: 'always' },
    effectivePeriod: { embedded: 'always' },
    performer: { embedded: 'always' },
    reasonNotGiven: { embedded: 'always' },
    reasonCode: { embedded: 'always' },
    reasonReference: { embedded: 'always' },
    prescription: { embedded: 'always' },
    device: { embedded: 'always' },
    note: { embedded: 'always' },
    dosage: { embedded: 'always' },
    eventHistory: { embedded: 'always' }
  }
});