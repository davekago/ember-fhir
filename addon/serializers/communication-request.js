import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    basedOn: { embedded: 'always' },
    replaces: { embedded: 'always' },
    groupIdentifier: { embedded: 'always' },
    category: { embedded: 'always' },
    medium: { embedded: 'always' },
    subject: { embedded: 'always' },
    recipient: { embedded: 'always' },
    topic: { embedded: 'always' },
    context: { embedded: 'always' },
    payload: { embedded: 'always' },
    occurrencePeriod: { embedded: 'always' },
    sender: { embedded: 'always' },
    requester: { embedded: 'always' },
    reasonCode: { embedded: 'always' },
    reasonReference: { embedded: 'always' },
    note: { embedded: 'always' }
  }
});