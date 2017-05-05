import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    partOf: { embedded: 'always' },
    code: { embedded: 'always' },
    subject: { embedded: 'always' },
    context: { embedded: 'always' },
    occurrencePeriod: { embedded: 'always' },
    occurrenceTiming: { embedded: 'always' },
    participant: { embedded: 'always' },
    performingOrganization: { embedded: 'always' },
    requestingOrganization: { embedded: 'always' },
    quantity: { embedded: 'always' },
    bodysite: { embedded: 'always' },
    priceOverride: { embedded: 'always' },
    enterer: { embedded: 'always' },
    reason: { embedded: 'always' },
    service: { embedded: 'always' },
    account: { embedded: 'always' },
    note: { embedded: 'always' },
    supportingInformation: { embedded: 'always' }
  }
});