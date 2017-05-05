import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    insurer: { embedded: 'always' },
    provider: { embedded: 'always' },
    organization: { embedded: 'always' },
    subject: { embedded: 'always' },
    coverage: { embedded: 'always' }
  }
});