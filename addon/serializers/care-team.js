import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    category: { embedded: 'always' },
    subject: { embedded: 'always' },
    context: { embedded: 'always' },
    period: { embedded: 'always' },
    participant: { embedded: 'always' },
    reasonCode: { embedded: 'always' },
    reasonReference: { embedded: 'always' },
    managingOrganization: { embedded: 'always' },
    note: { embedded: 'always' }
  }
});