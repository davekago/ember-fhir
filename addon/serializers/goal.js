import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    category: { embedded: 'always' },
    priority: { embedded: 'always' },
    description: { embedded: 'always' },
    subject: { embedded: 'always' },
    startCodeableConcept: { embedded: 'always' },
    target: { embedded: 'always' },
    expressedBy: { embedded: 'always' },
    addresses: { embedded: 'always' },
    note: { embedded: 'always' },
    outcomeCode: { embedded: 'always' },
    outcomeReference: { embedded: 'always' }
  }
});