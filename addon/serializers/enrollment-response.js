import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    request: { embedded: 'always' },
    outcome: { embedded: 'always' },
    organization: { embedded: 'always' },
    requestProvider: { embedded: 'always' },
    requestOrganization: { embedded: 'always' }
  }
});