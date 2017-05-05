import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    definition: { embedded: 'always' },
    basedOn: { embedded: 'always' },
    replaces: { embedded: 'always' },
    groupIdentifier: { embedded: 'always' },
    type_: { embedded: 'always' },
    serviceRequested: { embedded: 'always' },
    subject: { embedded: 'always' },
    context: { embedded: 'always' },
    occurrencePeriod: { embedded: 'always' },
    requester: { embedded: 'always' },
    specialty: { embedded: 'always' },
    recipient: { embedded: 'always' },
    reasonCode: { embedded: 'always' },
    reasonReference: { embedded: 'always' },
    supportingInfo: { embedded: 'always' },
    note: { embedded: 'always' },
    relevantHistory: { embedded: 'always' }
  }
});