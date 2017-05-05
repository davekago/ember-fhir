import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    basedOn: { embedded: 'always' },
    partOf: { embedded: 'always' },
    context: { embedded: 'always' },
    category: { embedded: 'always' },
    medicationCodeableConcept: { embedded: 'always' },
    medicationReference: { embedded: 'always' },
    effectivePeriod: { embedded: 'always' },
    informationSource: { embedded: 'always' },
    subject: { embedded: 'always' },
    derivedFrom: { embedded: 'always' },
    reasonNotTaken: { embedded: 'always' },
    reasonCode: { embedded: 'always' },
    reasonReference: { embedded: 'always' },
    note: { embedded: 'always' },
    dosage: { embedded: 'always' }
  }
});