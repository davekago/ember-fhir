import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    definition: { embedded: 'always' },
    basedOn: { embedded: 'always' },
    replaces: { embedded: 'always' },
    partOf: { embedded: 'always' },
    category: { embedded: 'always' },
    subject: { embedded: 'always' },
    context: { embedded: 'always' },
    period: { embedded: 'always' },
    author: { embedded: 'always' },
    careTeam: { embedded: 'always' },
    addresses: { embedded: 'always' },
    supportingInfo: { embedded: 'always' },
    goal: { embedded: 'always' },
    activity: { embedded: 'always' },
    note: { embedded: 'always' }
  }
});