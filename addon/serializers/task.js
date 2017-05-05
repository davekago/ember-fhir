import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    definitionReference: { embedded: 'always' },
    basedOn: { embedded: 'always' },
    groupIdentifier: { embedded: 'always' },
    partOf: { embedded: 'always' },
    statusReason: { embedded: 'always' },
    businessStatus: { embedded: 'always' },
    code: { embedded: 'always' },
    focus: { embedded: 'always' },
    for: { embedded: 'always' },
    context: { embedded: 'always' },
    executionPeriod: { embedded: 'always' },
    requester: { embedded: 'always' },
    performerType: { embedded: 'always' },
    owner: { embedded: 'always' },
    reason: { embedded: 'always' },
    note: { embedded: 'always' },
    relevantHistory: { embedded: 'always' },
    restriction: { embedded: 'always' },
    input: { embedded: 'always' },
    output: { embedded: 'always' }
  }
});