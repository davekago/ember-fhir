import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    code: { embedded: 'always' },
    subject: { embedded: 'always' },
    encounter: { embedded: 'always' },
    source: { embedded: 'always' },
    orderedBy: { embedded: 'always' },
    note: { embedded: 'always' },
    entry: { embedded: 'always' },
    emptyReason: { embedded: 'always' }
  }
});