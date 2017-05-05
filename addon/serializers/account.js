import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    type_: { embedded: 'always' },
    subject: { embedded: 'always' },
    period: { embedded: 'always' },
    active: { embedded: 'always' },
    balance: { embedded: 'always' },
    coverage: { embedded: 'always' },
    owner: { embedded: 'always' },
    guarantor: { embedded: 'always' }
  }
});