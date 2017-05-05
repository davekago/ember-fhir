import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    definition: { embedded: 'always' },
    basedOn: { embedded: 'always' },
    priorRequest: { embedded: 'always' },
    groupIdentifier: { embedded: 'always' },
    intent: { embedded: 'always' },
    codeReference: { embedded: 'always' },
    codeCodeableConcept: { embedded: 'always' },
    subject: { embedded: 'always' },
    context: { embedded: 'always' },
    occurrencePeriod: { embedded: 'always' },
    occurrenceTiming: { embedded: 'always' },
    requester: { embedded: 'always' },
    performerType: { embedded: 'always' },
    performer: { embedded: 'always' },
    reasonCode: { embedded: 'always' },
    reasonReference: { embedded: 'always' },
    supportingInfo: { embedded: 'always' },
    note: { embedded: 'always' },
    relevantHistory: { embedded: 'always' }
  }
});