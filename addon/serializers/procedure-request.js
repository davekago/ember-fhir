import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    definition: { embedded: 'always' },
    basedOn: { embedded: 'always' },
    replaces: { embedded: 'always' },
    requisition: { embedded: 'always' },
    category: { embedded: 'always' },
    code: { embedded: 'always' },
    subject: { embedded: 'always' },
    context: { embedded: 'always' },
    occurrencePeriod: { embedded: 'always' },
    occurrenceTiming: { embedded: 'always' },
    asNeededCodeableConcept: { embedded: 'always' },
    requester: { embedded: 'always' },
    performerType: { embedded: 'always' },
    performer: { embedded: 'always' },
    reasonCode: { embedded: 'always' },
    reasonReference: { embedded: 'always' },
    supportingInfo: { embedded: 'always' },
    specimen: { embedded: 'always' },
    bodySite: { embedded: 'always' },
    note: { embedded: 'always' },
    relevantHistory: { embedded: 'always' }
  }
});